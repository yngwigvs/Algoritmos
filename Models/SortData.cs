using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projeto.Models
{
    public class SortData
    {
        public List<int> vetor { get; set; }
        

        public SortData()
        {
            vetor = new List<int>();
        }

        public void apagarVetor()
        {
            vetor.Clear();
        }

    }
}