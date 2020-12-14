using System;
using System.Collections.Generic;

namespace PW_Recolectron2._0.Models
{
    public partial class RegistroEmisionDonacionesPg
    {
        public RegistroEmisionDonacionesPg()
        {
            RegistrodePublicogral = new HashSet<RegistrodePublicogral>();
        }

        public int IdDepublico { get; set; }
        public string Destinatario { get; set; }
        public string Telefono { get; set; }
        public string CorreoElectronico { get; set; }
        public DateTime FechaHora { get; set; }
        public string Causa { get; set; }

        public virtual ICollection<RegistrodePublicogral> RegistrodePublicogral { get; set; }
    }
}
