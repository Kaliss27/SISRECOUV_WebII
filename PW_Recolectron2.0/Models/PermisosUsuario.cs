using System;
using System.Collections.Generic;

namespace PW_Recolectron2._0.Models
{
    public partial class PermisosUsuario
    {
        public PermisosUsuario()
        {
            Usuarios = new HashSet<Usuarios>();
        }

        public int IdPermisos { get; set; }
        public string TipoUsuario { get; set; }

        public virtual ICollection<Usuarios> Usuarios { get; set; }
    }
}
