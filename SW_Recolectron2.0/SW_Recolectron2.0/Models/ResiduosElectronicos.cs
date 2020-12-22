using System;
using System.Collections.Generic;

namespace SW_Recolectron2._0.Models
{
    public partial class ResiduosElectronicos
    {
        public ResiduosElectronicos()
        {
            InventarioRe = new HashSet<InventarioRe>();
            RecepcionRe = new HashSet<RecepcionRe>();
        }

        public int IdRe { get; set; }
        public string Descripcion { get; set; }
        public int Categoria { get; set; }
        public float CostoPromedioXUnidad { get; set; }

        public virtual CategoriasRe CategoriaNavigation { get; set; }
        public virtual ICollection<InventarioRe> InventarioRe { get; set; }
        public virtual ICollection<RecepcionRe> RecepcionRe { get; set; }
    }
}
