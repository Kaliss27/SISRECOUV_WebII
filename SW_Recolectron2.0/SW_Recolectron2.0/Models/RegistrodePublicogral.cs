using System;
using System.Collections.Generic;

namespace SW_Recolectron2._0.Models
{
    public partial class RegistrodePublicogral
    {
        public int IdDepgral { get; set; }
        public int FkArticulo { get; set; }
        public int Cantidad { get; set; }
        public int DeGral { get; set; }

        public virtual RegistroEmisionDonacionesPg DeGralNavigation { get; set; }
        public virtual InventarioRe FkArticuloNavigation { get; set; }
    }
}
