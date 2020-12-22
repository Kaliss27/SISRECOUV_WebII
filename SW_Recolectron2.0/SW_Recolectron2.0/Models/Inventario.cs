using System;
using System.Collections.Generic;

namespace SW_Recolectron2._0.Models
{
    public partial class Inventario
    {
        public int IdArticulo { get; set; }
        public string Articulo { get; set; }
        public int Cantidad { get; set; }
        public string Estado { get; set; }
        public string Notas { get; set; }
    }
}
