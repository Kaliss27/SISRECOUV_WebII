using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.DataProtection.AuthenticatedEncryption;
using Microsoft.AspNetCore.DataProtection.AuthenticatedEncryption.ConfigurationModel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SW_Recolectron2._0.Helpers;
using SW_Recolectron2._0.Models;

namespace SW_Recolectron2._0
{
    public class Startup
    {
        public const string MY_CORS = "AllowSpecificOrigin";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<recobd_v3Context>(option =>
              option.UseMySql(Configuration.GetConnectionString("DefaultConnection")));
            services.AddControllers();
            services.AddMemoryCache();
            services.AddCors(options =>
            {
                options.AddPolicy(MY_CORS, builder =>
                {
                    builder
                      .WithOrigins("http://localhost:3000")
                      .WithMethods("GET", "POST", "PUT", "DELETE")
                      .WithHeaders("accept", "content-type", "origin", "x-custom-header", "authorization");

                    //builder.WithOrigins ("http://localhost:3000");
                    //builder.AllowAnyMethod();
                    //builder.AllowAnyHeader();
                });
            });

            services.AddDataProtection()
               .SetApplicationName("MyApp")
               .SetDefaultKeyLifetime(TimeSpan.FromDays(14))
               //.PersistKeysToFileSystem (new System.IO.DirectoryInfo (@"\\server\share\")) %APPDATA%
               //.ProtectKeysWithDpapi()
               .UseCryptographicAlgorithms(new AuthenticatedEncryptorConfiguration()
               {
                   EncryptionAlgorithm = EncryptionAlgorithm.AES_256_CBC,
                   ValidationAlgorithm = ValidationAlgorithm.HMACSHA256
               });

            // habilitando JWT Authentication
            var jwtSection = Configuration.GetSection("JWTSettings");
            services.Configure<JWTSettings>(jwtSection);

            var jwtSettings = jwtSection.Get<JWTSettings>();
            var key = System.Text.Encoding.ASCII.GetBytes(jwtSettings.Secret);

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(y =>
            {
                y.RequireHttpsMetadata = false;
                y.SaveToken = true;
                y.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });


            services.AddScoped<IUserService, UserService>();

        }



        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAuthentication();

            app.UseCors(MY_CORS);

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
