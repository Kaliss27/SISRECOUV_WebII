using System;
using System.Collections.Generic;

namespace SW_Recolectron2._0.Models
{
    public partial class InventarioRe
    {
        public InventarioRe()
        {
            RegistrodeComponentes = new HashSet<RegistrodeComponentes>();
            RegistrodePublicogral = new HashSet<RegistrodePublicogral>();
        }

        public int IdArticulo { get; set; }
        public int Articulo { get; set; }
        public int Cantidad { get; set; }
        public float PesoXUnidad { get; set; }
        public int FkiEstado { get; set; }
        public string Notas { get; set; }

        public virtual ResiduosElectronicos ArticuloNavigation { get; set; }
        public virtual Estados FkiEstadoNavigation { get; set; }
        public virtual ICollection<RegistrodeComponentes> RegistrodeComponentes { get; set; }
        public virtual ICollection<RegistrodePublicogral> RegistrodePublicogral { get; set; }
    }
}
