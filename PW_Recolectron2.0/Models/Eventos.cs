using System;
using System.Collections.Generic;

namespace PW_Recolectron2._0.Models
{
    public partial class Eventos
    {
        public int IdEventos { get; set; }
        public string TituloEvento { get; set; }
        public string Descripción { get; set; }
        public DateTime FechaHora { get; set; }
    }
}
