using System;
using System.Collections.Generic;

namespace SW_Recolectron2._0.Models
{
    public partial class RegistroRecepcionDonaciones
    {
        public RegistroRecepcionDonaciones()
        {
            RecepcionRe = new HashSet<RecepcionRe>();
        }

        public int IdRecepcion { get; set; }
        public int Origen { get; set; }
        public string Nombre { get; set; }
        public string Telefono { get; set; }
        public string CorreoElectronico { get; set; }
        public DateTime FechaHora { get; set; }

        public virtual CatalogoOrigen OrigenNavigation { get; set; }
        public virtual ICollection<RecepcionRe> RecepcionRe { get; set; }
    }
}
