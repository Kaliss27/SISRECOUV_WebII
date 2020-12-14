using System;
using System.Collections.Generic;

namespace PW_Recolectron2._0.Models
{
    public partial class InventarioSb
    {
        public InventarioSb()
        {
            SbActividades = new HashSet<SbActividades>();
        }

        public int IdInventarioSb { get; set; }
        public int ArticuloFk { get; set; }
        public int EstadoFk { get; set; }
        public string Notas { get; set; }

        public virtual RecepcionRe ArticuloFkNavigation { get; set; }
        public virtual Estados EstadoFkNavigation { get; set; }
        public virtual ICollection<SbActividades> SbActividades { get; set; }
    }
}
