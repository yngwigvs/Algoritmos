using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Projeto.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult InsertionSort()
        {
            return RedirectToAction("Index", "InsertionSort");
        }

        public ActionResult teste()
        {
            return View();
        }

    }
}