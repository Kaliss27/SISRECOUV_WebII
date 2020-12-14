using System;
using System.Collections.Generic;

namespace PW_Recolectron2._0.Models
{
    public partial class RegistroEmisionDonacionesEstudiantes
    {
        public RegistroEmisionDonacionesEstudiantes()
        {
            RegistrodeComponentes = new HashSet<RegistrodeComponentes>();
        }

        public int IdEmision { get; set; }
        public string Matricula { get; set; }
        public string Nombre { get; set; }
        public string Apaterno { get; set; }
        public string Amaterno { get; set; }
        public int FkDependencia { get; set; }
        public DateTime FechaHora { get; set; }

        public virtual CatalogoPeDeps FkDependenciaNavigation { get; set; }
        public virtual ICollection<RegistrodeComponentes> RegistrodeComponentes { get; set; }
    }
}
