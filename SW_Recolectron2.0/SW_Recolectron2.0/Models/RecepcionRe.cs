using System;
using System.Collections.Generic;

namespace SW_Recolectron2._0.Models
{
    public partial class RecepcionRe
    {
        public RecepcionRe()
        {
            InventarioSb = new HashSet<InventarioSb>();
        }

        public int IdRcRe { get; set; }
        public int FkRecepcion { get; set; }
        public int FkRe { get; set; }
        public int Cantidad { get; set; }
        public float PesoXUnidad { get; set; }

        public virtual ResiduosElectronicos FkReNavigation { get; set; }
        public virtual RegistroRecepcionDonaciones FkRecepcionNavigation { get; set; }
        public virtual ICollection<InventarioSb> InventarioSb { get; set; }
    }
}
