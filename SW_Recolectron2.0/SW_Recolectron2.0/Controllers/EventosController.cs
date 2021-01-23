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
    public class EventosController : ControllerBase
    {
        private recobd_v3Context context;

        public EventosController(recobd_v3Context ctx)
        {
            context = ctx;
        }

        // GET: api/<EventosController>
        [HttpGet]
        public IEnumerable<Eventos> Get()
        {
            var events = context.Eventos;

            return events;
        }

        // GET api/<EventosController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<EventosController>
        [HttpPost]
        public IActionResult AddEvent([FromBody] Eventos value)
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

        // PUT api/<EventosController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EventosController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
