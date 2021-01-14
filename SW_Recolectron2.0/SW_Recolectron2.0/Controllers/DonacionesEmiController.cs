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
        public void AddStudent([FromBody] RegistroEmisionDonacionesEstudiantes value)
        {

            context.Add(value);
            context.SaveChanges();
        }

        [HttpPost("AddPublic")]
        public void AddPublic([FromBody] RegistroEmisionDonacionesPg value)
        {

            context.Add(value);
            context.SaveChanges();
        }

        [HttpPost("AddDonacionEst")]
        public void RegDonacionEst([FromBody] RegistrodeComponentes value)
        {
            var idrede = context.RegistroEmisionDonacionesEstudiantes.OrderByDescending(e => e.IdEmision).First().IdEmision;

            RegistrodeComponentes rdc = new RegistrodeComponentes
            {
                FkRegistroDe = idrede,
                FkComponente = value.FkComponente,
                Cantidad = value.Cantidad
            };
        


            context.RegistrodeComponentes.Add(rdc);
            context.SaveChanges();
        }

        [HttpPost("AddDonacionPG")]
        public void RegDonacionPG([FromBody] RegistrodePublicogral value)
        {
            var idrednpg = context.RegistroEmisionDonacionesPg.OrderByDescending(e => e.IdDepublico).First().IdDepublico;

            RegistrodePublicogral rdpg = new RegistrodePublicogral
            {
                
                 FkArticulo = value.FkArticulo,
                 Cantidad = value.Cantidad,
                 DeGral = idrednpg
            };

            context.RegistrodePublicogral.Add(rdpg);
            context.SaveChanges();
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
