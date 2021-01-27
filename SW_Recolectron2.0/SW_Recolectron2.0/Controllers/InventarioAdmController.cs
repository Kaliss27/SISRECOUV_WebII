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
    public class InventarioAdmController : ControllerBase
    {
        private recobd_v3Context context;
        
        public InventarioAdmController(recobd_v3Context ctx)
        {
            context = ctx;
        }

        [HttpGet("{id}")]
        public InventarioRe Get(int id)
        {
            InventarioRe inventario = context.InventarioRe.Where<InventarioRe>(e => e.IdArticulo == id).FirstOrDefault<InventarioRe>();

            if (inventario == null) return null;

            return inventario;
        }
        // GET: api/<InventarioAdmController>
        [HttpGet]
        public IEnumerable<Inventario> getInventario()
        {
            var inventario = context.Inventario;

            return inventario;
        }

        [HttpGet("Estados")]
        public IEnumerable<Estados> getEstados()
        {
            var estados = context.Estados;

            return estados;
        }


        // POST api/<InventarioAdmController>
        [HttpPost("AddResiduo")]
        public IActionResult AddResiduo([FromBody] ResiduosElectronicos value)
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

        [HttpPost("AddArticulo")]
        public IActionResult AddArticulo([FromBody] InventarioRe value)
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
        // PUT api/<InventarioAdmController>/5
        [HttpPut("{id}")]
        public IActionResult editInventario(int id, [FromBody] InventarioRe value)
        {
            bool error = false;

            InventarioRe inventario = context.InventarioRe.Where<InventarioRe>(e => e.IdArticulo == id).FirstOrDefault<InventarioRe>();

            if (inventario == null) error=true;

            inventario.Articulo = value.Articulo;
            inventario.Cantidad = value.Cantidad;
            inventario.PesoXUnidad = value.PesoXUnidad;
            inventario.FkiEstado = value.FkiEstado;
            inventario.Notas = value.Notas;

            context.SaveChanges();

            var result = new
            {
                Status = !error ? "Success" : "Fail"
            };

            return Ok(result);
        }

        // DELETE api/<InventarioAdmController>/5
        [HttpDelete("DelArticulo/{id}")]
        public IActionResult DelArticulo(int id)
        {
            bool error = false;

            InventarioRe articulo = context.InventarioRe.Where<InventarioRe>(e => e.IdArticulo == id).FirstOrDefault<InventarioRe>();

            if (articulo == null) error=true;

            articulo.FkiEstado = 1;

            context.SaveChanges();

            var result = new
            {
                Status = !error ? "Success" : "Fail"
            };

            return Ok(result);
        }
    }
}
