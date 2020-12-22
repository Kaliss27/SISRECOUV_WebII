using System;
using System.Collections.Generic;

namespace SW_Recolectron2._0.Models
{
    public partial class CatalogoVisitas
    {
        public CatalogoVisitas()
        {
            RegistroVisitas = new HashSet<RegistroVisitas>();
        }

        public int IdVisita { get; set; }
        public string TipoVisita { get; set; }

        public virtual ICollection<RegistroVisitas> RegistroVisitas { get; set; }
    }
}
