using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projeto.Models
{
    public class BlocoEstados
    {
        public List<State> vetorEstados { get; set; }

        public BlocoEstados()
        {
            vetorEstados = new List<State>();
        }

        public void addEstado(State estado)
        {
            vetorEstados.Add(estado);
        }

    }
}