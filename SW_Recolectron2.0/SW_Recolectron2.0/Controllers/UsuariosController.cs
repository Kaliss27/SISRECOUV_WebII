using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;
using SW_Recolectron2._0.Helpers;
using SW_Recolectron2._0.Models;

namespace SW_Recolectron2._0.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : Controller
    {
        private IUserService _userService;
        private IDataProtector protector;

        public UsuariosController(IUserService userService, IDataProtectionProvider provider)
        {
            _userService = userService;
            this.protector = provider.CreateProtector("ProtectorID");
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] Usuarios userParam)
        {
            var user = _userService.Authenticate(userParam.NombreUsuario, userParam.Contrasenia);

            if (user == null)
            {
                return BadRequest(new { message = "Username or Password is incorrect!" });
            }

            //var foo = new Usuarios();

            //byte[] intBytes = BitConverter.GetBytes(user.IdUsuarios);
            //if (BitConverter.IsLittleEndian)
            //    Array.Reverse(intBytes);

            //var bar = this.protector.Protect(intBytes);
            //foo.IdUsuarios = BitConverter.ToInt32(bar); 

            //bar = this.protector.Protect (System.Text.Encoding.UTF8.GetBytes (user.UserName));
            //foo.UserName = System.Text.Encoding.UTF8.GetString (bar);

            /*foo.FirstName = user.FirstName;
            foo.LastName = user.LastName;
            foo.Password = user.Password;*/
            //foo.Token = user.Token;

            return Ok(user);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }

        [HttpGet("getuser/{cipherID}")]
        public Usuarios GetUser(string cipherID)
        {
            var id = this.protector.Unprotect(cipherID);
            return null;
        }
    }
}
