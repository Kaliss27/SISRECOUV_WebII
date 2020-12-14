using System;
using System.Collections.Generic;

namespace PW_Recolectron2._0.Models
{
    public partial class RegistroActividades
    {
        public RegistroActividades()
        {
            SbActividades = new HashSet<SbActividades>();
        }

        public int IdActividad { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaHoraInicio { get; set; }
        public DateTime FechaHoraFin { get; set; }
        public int FkaEstado { get; set; }

        public virtual Estados FkaEstadoNavigation { get; set; }
        public virtual ICollection<SbActividades> SbActividades { get; set; }
    }
}
