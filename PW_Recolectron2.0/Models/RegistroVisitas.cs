using System;
using System.Collections.Generic;

namespace PW_Recolectron2._0.Models
{
    public partial class RegistroVisitas
    {
        public int IdRegVisitas { get; set; }
        public string Matricula { get; set; }
        public string Nombre { get; set; }
        public string Apaterno { get; set; }
        public string Amaterno { get; set; }
        public int PeDependencia { get; set; }
        public int TipoVisita { get; set; }
        public DateTime FechaHora { get; set; }

        public virtual CatalogoPeDeps PeDependenciaNavigation { get; set; }
        public virtual CatalogoVisitas TipoVisitaNavigation { get; set; }
    }
}
