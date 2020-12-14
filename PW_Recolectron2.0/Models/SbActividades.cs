using System;
using System.Collections.Generic;

namespace PW_Recolectron2._0.Models
{
    public partial class SbActividades
    {
        public int IdSbActividades { get; set; }
        public int FkSb { get; set; }
        public int FkAct { get; set; }

        public virtual RegistroActividades FkActNavigation { get; set; }
        public virtual InventarioSb FkSbNavigation { get; set; }
    }
}
