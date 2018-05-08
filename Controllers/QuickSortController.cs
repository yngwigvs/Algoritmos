using Projeto.Metodos.Ordenacao;
using Projeto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Projeto.Controllers
{
    public class QuickSortController : Controller
    {
        private static SortData dados = new SortData();

        public ActionResult Start()
        {
            var vet = dados.vetor;
            ViewBag.Array = vet;
            ViewBag.ArrayLen = vet.Count;
            return View();
        }

        public ActionResult add(int value)
        {
            dados.vetor.Add(value);
            return RedirectToAction("Start", "QuickSort");
        }


        public ActionResult remove(int value)
        {
            dados.vetor.Remove(value);
            return RedirectToAction("Start", "QuickSort");
        }

        public ActionResult limpar()
        {
            dados.apagarVetor();
            return RedirectToAction("Start", "QuickSort");
        }

        public ActionResult ordenar()
        {
            Sort.quickSort(dados.vetor);
            return RedirectToAction("Start", "QuickSort");
        }

        public ActionResult voltar()
        {
            dados.apagarVetor();
            return RedirectToAction("Index", "Home");
        }

    }
}