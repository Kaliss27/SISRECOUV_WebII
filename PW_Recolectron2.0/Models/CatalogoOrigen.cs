using System;
using System.Collections.Generic;

namespace PW_Recolectron2._0.Models
{
    public partial class CatalogoOrigen
    {
        public CatalogoOrigen()
        {
            RegistroRecepcionDonaciones = new HashSet<RegistroRecepcionDonaciones>();
        }

        public int IdOrigen { get; set; }
        public string OrigenTipo { get; set; }

        public virtual ICollection<RegistroRecepcionDonaciones> RegistroRecepcionDonaciones { get; set; }
    }
}
