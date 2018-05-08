using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projeto.Models
{
    public class State
    {
        public int indexBefore { get; set; }
        public int indexAfter { get; set; }
        public int inFocus { get; set; }

        public State(int before, int after, int focus)
        {
            indexBefore = before;
            indexAfter = after;
            inFocus = focus;
        }



    }
}