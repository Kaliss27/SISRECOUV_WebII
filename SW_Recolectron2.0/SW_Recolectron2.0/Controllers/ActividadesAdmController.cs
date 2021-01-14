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
    public class ActividadesAdmController : ControllerBase
    {
        private recobd_v3Context context;

        public ActividadesAdmController(recobd_v3Context ctx)
        {
            context = ctx;
        }

        //GET:http://localhost:5001/api/ActividadesAdm
        [HttpGet]
        public IEnumerable<Actividades> GetActivdades()
        {
            var acts = context.Actividades;

            return acts;
        }

        //GET:http://localhost:5001/api/ActividadesAdm/MaterialEnEsp
        [HttpGet("MaterialEnEsp")]
        public IEnumerable<MaterialEnEspera> GetMaterial()
        {
            var mees = context.MaterialEnEspera;

            return mees;
        }

        //GET:http://localhost:5001/api/ActividadesAdm/MaterialRevision
        [HttpGet("MaterialRevision")]
        public IEnumerable<MaterialEnEsperaRevision> GetMaterialRev()
        {
            var meer = context.MaterialEnEsperaRevision;

            return meer;
        }


        // POST api/<ActividadesAdmController>
        [HttpPost]
        public void InsertActividad([FromBody] NActividad value)
        {
            using (var transaction = context.Database.BeginTransaction())
            {
                RegistroActividades acti = new RegistroActividades
                {
                    Descripcion = value.Descripcion,
                    FechaHoraInicio = value.FechaHoraInicio,
                    FechaHoraFin = value.FechaHoraFin,
                    FkaEstado = value.FkaEstado
                };
                context.RegistroActividades.Add(acti);
                context.SaveChanges();

                SbActividades sbactividad = new SbActividades
                {
                    FkSb = value.FkSb,
                    FkAct = acti.IdActividad
                };

                context.SbActividades.Add(sbactividad);

                try
                {
                    context.SaveChanges();
                    transaction.Commit();
                }
                catch (Exception ex)
                {

                }
            }

        }


        // PUT http://localhost:5001/api/ActividadesAdm/id
        [HttpPut("{id}")]
        public void EditActividad(int id, [FromBody] Actividad value)
        {
            using (var transaction = context.Database.BeginTransaction())
            {
                RegistroActividades regact = context.RegistroActividades.Where<RegistroActividades>(e => e.IdActividad == id).FirstOrDefault<RegistroActividades>();
                SbActividades sbactividad = context.SbActividades.Where<SbActividades>(e => e.FkAct == id).FirstOrDefault<SbActividades>();
                if (regact == null) return;
                if (sbactividad == null) return;

                regact.Descripcion = value.Descripcion;
                regact.FechaHoraInicio = value.FechaHoraInicio;
                regact.FechaHoraFin = value.FechaHoraFin;
                sbactividad.FkSb = value.FkSb;

                try
                {
                    context.SaveChanges();
                    transaction.Commit();
                }catch(Exception ex)
                {

                }
            }

           
            
        }

        [HttpPut("DelActividad/{id}")]
        public void DelActividad(int id)
        {
           
                RegistroActividades regact = context.RegistroActividades.Where<RegistroActividades>(e => e.IdActividad == id).FirstOrDefault<RegistroActividades>();
            if (regact == null) return;

            regact.FkaEstado = 1;

            context.SaveChanges();

        }

        [HttpDelete("DelMaterial/{id}")]
        public void DelMaterial(int id)
        {

            InventarioSb invsb = context.InventarioSb.Where<InventarioSb>(e => e.IdInventarioSb == id).FirstOrDefault<InventarioSb>();
            if (invsb == null) return;

            invsb.EstadoFk = 1;

            context.SaveChanges();

        }
        // DELETE api/<ActividadesAdmController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class Actividad
    {
        public string Descripcion { get; set; }
        public DateTime FechaHoraInicio { get; set; }
        public DateTime FechaHoraFin { get; set; }
        public int FkSb { get; set; }
    }

    public class NActividad
    {
        
        public int IdActividad { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaHoraInicio { get; set; }
        public DateTime FechaHoraFin { get; set; }
        public int FkaEstado { get; set; }
        public int FkSb { get; set; }
    }
}
