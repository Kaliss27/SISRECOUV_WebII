﻿using System;
using System.Collections.Generic;

namespace PW_Recolectron2._0.Models
{
    public partial class Actividades
    {
        public int IdActividad { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaHoraInicio { get; set; }
        public DateTime FechaHoraFin { get; set; }
        public string Estado { get; set; }
    }
}
