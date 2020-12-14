using System;
using System.Collections.Generic;

namespace PW_Recolectron2._0.Models
{
    public partial class MaterialEnEsperaRevision
    {
        public int IdInventarioSb { get; set; }
        public string Material { get; set; }
        public int Cantidad { get; set; }
        public float PesoXUnidad { get; set; }
    }
}
