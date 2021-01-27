using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SW_Recolectron2._0.Models;

namespace SW_Recolectron2._0.Helpers
{
    public interface IUserService
    {
        Usuarios Authenticate(string username, string password);
        IEnumerable<Usuarios> GetAll();
    }
}
