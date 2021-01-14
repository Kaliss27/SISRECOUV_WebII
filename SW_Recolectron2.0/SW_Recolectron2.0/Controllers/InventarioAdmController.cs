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

        // GET api/<InventarioAdmController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<InventarioAdmController>
        [HttpPost("AddResiduo")]
        public void AddResiduo([FromBody] ResiduosElectronicos value)
        {
            context.Add(value);

            context.SaveChanges();
        }

        [HttpPost("AddArticulo")]
        public void AddArticulo([FromBody] InventarioRe value)
        {
            context.Add(value);

            context.SaveChanges();
        }
        // PUT api/<InventarioAdmController>/5
        [HttpPut("{id}")]
        public void editInventario(int id, [FromBody] InventarioRe value)
        {
            InventarioRe inventario = context.InventarioRe.Where<InventarioRe>(e => e.IdArticulo == id).FirstOrDefault<InventarioRe>();

            if (inventario == null) return;

            inventario.Articulo = value.Articulo;
            inventario.Cantidad = value.Cantidad;
            inventario.PesoXUnidad = value.PesoXUnidad;
            inventario.FkiEstado = value.FkiEstado;
            inventario.Notas = value.Notas;

            context.SaveChanges();
        }

        // DELETE api/<InventarioAdmController>/5
        [HttpDelete("DelArticulo/{id}")]
        public void DelArticulo(int id)
        {
            InventarioRe articulo = context.InventarioRe.Where<InventarioRe>(e => e.IdArticulo == id).FirstOrDefault<InventarioRe>();

            if (articulo == null) return;

            articulo.FkiEstado = 1;

            context.SaveChanges();
        
        }
    }
}
