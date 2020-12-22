using System;
using System.Collections.Generic;

namespace SW_Recolectron2._0.Models
{
    public partial class CatalogoPeDeps
    {
        public CatalogoPeDeps()
        {
            RegistroEmisionDonacionesEstudiantes = new HashSet<RegistroEmisionDonacionesEstudiantes>();
            RegistroVisitas = new HashSet<RegistroVisitas>();
        }

        public int IdPeDeps { get; set; }
        public string PeDependencia { get; set; }

        public virtual ICollection<RegistroEmisionDonacionesEstudiantes> RegistroEmisionDonacionesEstudiantes { get; set; }
        public virtual ICollection<RegistroVisitas> RegistroVisitas { get; set; }
    }
}
