using System;
using System.Collections.Generic;

namespace PW_Recolectron2._0.Models
{
    public partial class RegistrodeComponentes
    {
        public int IdRdec { get; set; }
        public int FkRegistroDe { get; set; }
        public int FkComponente { get; set; }
        public int Cantidad { get; set; }

        public virtual InventarioRe FkComponenteNavigation { get; set; }
        public virtual RegistroEmisionDonacionesEstudiantes FkRegistroDeNavigation { get; set; }
    }
}
