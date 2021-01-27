using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using SW_Recolectron2._0.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SW_Recolectron2._0.Helpers
{
    public class UserService : IUserService
    {
        private readonly JWTSettings _jwtSettings;

        private readonly recobd_v3Context context;


        public UserService(IOptions<JWTSettings> jwtSettings, recobd_v3Context ctx)
        {
            _jwtSettings = jwtSettings.Value;
            context = ctx;
        }
        public Usuarios Authenticate(string username, string password)
        {
  
            var user = context.Usuarios.FirstOrDefault(x => x.NombreUsuario == username && x.Contrasenia == password);
            if (user == null) return null;

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = System.Text.Encoding.ASCII.GetBytes(_jwtSettings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new System.Security.Claims.ClaimsIdentity(new Claim[] {
                    new Claim (ClaimTypes.Name, user.IdUsuarios.ToString ())
                }),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            user.Contrasenia = null;
            return user;
        }

        public IEnumerable<Usuarios> GetAll()
        {
            return context.Usuarios.ToList().Select(x => {
                x.Contrasenia = null;
                return x;
            });
        }
    }
}
