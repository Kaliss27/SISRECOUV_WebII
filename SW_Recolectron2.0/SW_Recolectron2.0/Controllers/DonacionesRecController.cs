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
    public class DonacionesRecController : ControllerBase
    {
        private recobd_v3Context context;
        
        public DonacionesRecController(recobd_v3Context ctx)
        {
            context = ctx;
        }

        [HttpGet]
        public IEnumerable<RecepcionRe> Get()
        {
            var listorigen = context.RecepcionRe;

            return listorigen;
        }

        // GET: api/<DonacionesRecController>
        [HttpGet("Origen")]
        public IEnumerable<CatalogoOrigen> getOrigen()
        {
            var listorigen = context.CatalogoOrigen;

            return listorigen;
        }

        [HttpGet("CategoriaRE")]
        public IEnumerable<CategoriasRe> getCategoriaRE()
        {
            var catre = context.CategoriasRe;

            return catre;
        }

        [HttpGet("ResiduosElectronicos")]
        public IEnumerable<ResiduosElectronicos> getRE()
        {
            var residuos = context.ResiduosElectronicos;

            return residuos;
        }

        // GET api/<DonacionesRecController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DonacionesRecController>
        [HttpPost("AddPerson")]
        public IActionResult AddPerson([FromBody] RegistroRecepcionDonaciones value)
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

        [HttpPost("RegDonacion")]
        public IActionResult RegDonacion([FromBody] List<DonRec> value)
        {
            bool error = false;

            value.ForEach(e =>
            {
            using (var transaction = context.Database.BeginTransaction())
            {
                var idrecep = context.RegistroRecepcionDonaciones.OrderByDescending(e => e.IdRecepcion).First().IdRecepcion;


                
                    RecepcionRe rere = new RecepcionRe
                    {
                        FkRecepcion = idrecep,
                        FkRe = e.FkRe,
                        Cantidad = e.Cantidad,
                        PesoXUnidad = e.PesoXUnidad
                    };
                    context.RecepcionRe.Add(rere);
                    context.SaveChanges();


                    var idarticulo = context.RecepcionRe.OrderByDescending(i => i.IdRcRe).First().IdRcRe;

                    InventarioSb invsb = new InventarioSb
                    {
                        ArticuloFk = idarticulo,
                        EstadoFk = 1
                    };

                    context.InventarioSb.Add(invsb);
                try
                {
                    context.SaveChanges();
                    transaction.Commit();

                }catch(Exception ex)
                {
                        Console.WriteLine(ex.InnerException.Message);
                        error = true;
                    }
            }
            });
            var result = new
            {
                Status = !error ? "Success" : "Fail"
            };

            return new JsonResult(result);
        }

        // PUT api/<DonacionesRecController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DonacionesRecController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class DonRec
    {
        public int FkRe { get; set; }
        public int Cantidad { get; set; }
        public float PesoXUnidad { get; set; }
       
    }
}
