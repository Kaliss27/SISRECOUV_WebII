using System;
using System.Collections.Generic;

namespace SW_Recolectron2._0.Models
{
    public partial class Estados
    {
        public Estados()
        {
            InventarioRe = new HashSet<InventarioRe>();
            InventarioSb = new HashSet<InventarioSb>();
            RegistroActividades = new HashSet<RegistroActividades>();
        }

        public int IdEstados { get; set; }
        public string Estado { get; set; }

        public virtual ICollection<InventarioRe> InventarioRe { get; set; }
        public virtual ICollection<InventarioSb> InventarioSb { get; set; }
        public virtual ICollection<RegistroActividades> RegistroActividades { get; set; }
    }
}
