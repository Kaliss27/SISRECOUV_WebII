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
    public class RegVisitasController : ControllerBase
    {
        private recobd_v3Context context;

        public RegVisitasController(recobd_v3Context ctx)
        {
            context = ctx;
        }

        // GET: api/<RegVisitasController>
        [HttpGet("CatalogoPE")]
        public IEnumerable<CatalogoPeDeps> GetPeDeps()
        {
            var pedeps = context.CatalogoPeDeps;

            return pedeps;
        }

        [HttpGet("CatalogoVisitas")]
        public IEnumerable<CatalogoVisitas> GetVisitas()
        {
            var visitas = context.CatalogoVisitas;

            return visitas;
        }

        // GET api/<RegVisitasController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<RegVisitasController>
        [HttpPost]
        public IActionResult addVisita([FromBody] RegistroVisitas value)
        {
            bool error = false;

            try
            {
                context.Add(value);

                context.SaveChanges();

            }catch (Exception ex)
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

        // PUT api/<RegVisitasController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RegVisitasController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
