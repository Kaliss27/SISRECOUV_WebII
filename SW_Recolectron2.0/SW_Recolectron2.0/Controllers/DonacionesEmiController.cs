using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SW_Recolectron2._0.Models;


namespace SW_Recolectron2._0.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DonacionesEmiController : ControllerBase
    {
        private recobd_v3Context context;

        public DonacionesEmiController (recobd_v3Context ctx)
        {
            context = ctx;
        }

        // GET: api/<DonacionesEmiController>
        [HttpGet("Articulos")]
        public IEnumerable<Articulos> GetArticulos()
        {
            var arts = context.Articulos;

            return arts;
        }

        // GET api/<DonacionesEmiController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }



        // POST api/<DonacionesEmiController>
        [HttpPost("AddStudent")]
        public IActionResult AddStudent([FromBody] RegistroEmisionDonacionesEstudiantes value)
        {
            bool error = false;


            try
            {
                context.Add(value);

                context.SaveChanges();

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.InnerException.Message);
                error = true;
            }

            var result = new
            {
                Status = !error ? "Success" : "Fail"
            };

            return new JsonResult(result);
        }

        [HttpPost("AddPublic")]
        public IActionResult AddPublic([FromBody] RegistroEmisionDonacionesPg value)
        {

            bool error = false;


            try
            {
                context.Add(value);

                context.SaveChanges();

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.InnerException.Message);
                error = true;
            }

            var result = new
            {
                Status = !error ? "Success" : "Fail"
            };

            return new JsonResult(result);
        }

        [HttpPost("AddDonacionEst")]
        public IActionResult RegDonacionEst([FromBody] List<RegistrodeComponentes> value)
        {
            bool error = false;

            value.ForEach(e =>
            {

                var idrede = context.RegistroEmisionDonacionesEstudiantes.OrderByDescending(i => i.IdEmision).First().IdEmision;

                RegistrodeComponentes rdc = new RegistrodeComponentes
                {
                    FkRegistroDe = idrede,
                    FkComponente = e.FkComponente,
                    Cantidad = e.Cantidad
                };

                context.RegistrodeComponentes.Add(rdc);
                context.SaveChanges();
            });
            var result = new
            {
                Status = !error ? "Success" : "Fail"
            };

            return new JsonResult(result);
        }

        [HttpPost("AddDonacionPG")]
        public IActionResult RegDonacionPG([FromBody] List<RegistrodePublicogral> value)
        {
            bool error = false;

            value.ForEach(e =>
            {

                var idrednpg = context.RegistroEmisionDonacionesPg.OrderByDescending(i => i.IdDepublico).First().IdDepublico;

                RegistrodePublicogral rdpg = new RegistrodePublicogral
                {

                    FkArticulo = e.FkArticulo,
                    Cantidad = e.Cantidad,
                    DeGral = idrednpg
                };

                context.RegistrodePublicogral.Add(rdpg);
                context.SaveChanges();
            });
            var result = new
            {
                Status = !error ? "Success" : "Fail"
            };

            return new JsonResult(result);
        }


        // PUT api/<DonacionesEmiController>/5
        [HttpPut("EditCant/{id}")]
        public void EditInventarioRE(int id, [FromBody] InventarioRe value)
        {
            InventarioRe ire = context.InventarioRe.Where<InventarioRe>(e => e.IdArticulo == id).FirstOrDefault<InventarioRe>();

            if (ire == null) return;

            ire.Cantidad = value.Cantidad;

            context.SaveChanges();
        }

   
    }
}
