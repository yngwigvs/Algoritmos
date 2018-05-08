using Projeto.Metodos.Ordenacao;
using Projeto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Services;

namespace Projeto.Controllers
{
    public class InsertionSortController : Controller
    {
        private static SortData dados = new SortData();

        public ActionResult Start()
        {
            var vet = dados.vetor;
            ViewBag.Array = vet;
            ViewBag.ArrayLen = vet.Count;
            return View();
        }

        [HttpPost]
        public JsonResult ordenar(int[] array)
        {
            var vetor = new List<int>(array);
            SortAnimationData dados = Sort.insertionSort(vetor);
            return Json(new { data = dados });
        }

        public ActionResult voltar()
        {
            dados.apagarVetor();
            return RedirectToAction("Index", "Home");
        }

    }
}