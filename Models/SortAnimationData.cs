using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projeto.Models
{
    public class SortAnimationData
    {
        public List<BlocoEstados> listaBlocos { get; set; }
        public List<int> vetorFinal { get; set; }

        public SortAnimationData()
        {
            listaBlocos = new List<BlocoEstados>();
        }

        public void addBloco(BlocoEstados bloco)
        {
            listaBlocos.Add(bloco);
        }

        public void setEstadoFinal(List<int> estadoFinal)
        {
            this.vetorFinal = estadoFinal;
        }






    }
}