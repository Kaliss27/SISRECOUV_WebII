using System;
using System.Collections.Generic;

namespace SW_Recolectron2._0.Models
{
    public partial class CategoriasRe
    {
        public CategoriasRe()
        {
            ResiduosElectronicos = new HashSet<ResiduosElectronicos>();
        }

        public int IdCRe { get; set; }
        public string Categoria { get; set; }

        public virtual ICollection<ResiduosElectronicos> ResiduosElectronicos { get; set; }
    }
}
