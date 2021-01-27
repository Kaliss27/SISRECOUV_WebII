using System;
using System.Collections.Generic;

namespace SW_Recolectron2._0.Models
{
    public partial class Usuarios
    {
        public int IdUsuarios { get; set; }
        public string Nombre { get; set; }
        public string Apaterno { get; set; }
        public string Amaterno { get; set; }
        public int TipoUsuario { get; set; }
        public string NombreUsuario { get; set; }
        public string Contrasenia { get; set; }
        public string Token { get; set; }

        public virtual PermisosUsuario TipoUsuarioNavigation { get; set; }
    }
}
