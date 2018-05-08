using Projeto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Services;



namespace Projeto.Metodos.Ordenacao
{
    public static class Sort
    {

        public static SortAnimationData insertionSort(List<int> vet)
        {
            var animationData = new SortAnimationData();
            State estado = null;
            BlocoEstados bloco = null;

            int i, x, temp;
            int r = 0;
            var tam = vet.Count;

            for (i = 1; i < tam; i++)
            {
                bloco = new BlocoEstados();
                animationData.addBloco(bloco);

                x = i;
                temp = vet[i];

                while (x - 1 >= 0)
                {
                    if(vet[x - 1] > temp)
                    {
                        vet[x] = vet[x - 1];
                        vet[x - 1] = temp;



                        estado = new State(x,x-1,x);
                        bloco.addEstado(estado);


                        x--;
                    }
                    else
                    {
                        break;
                    }
                }
            }



            animationData.setEstadoFinal(vet);
            return animationData;
        }

        public static void selectionSort(List<int> vet)
        {
            int i, j,temp, menor;
            int tam = vet.Count;

            for (i = 0; i < tam; i++)
            {
                menor = i;

                for (j = i + 1; j < tam; j++)
                {
                    if (vet[j] < vet[menor])
                    {
                        menor = j;
                    }
                }

                temp = vet[i];
                vet[i] = vet[menor];
                vet[menor] = temp;
            }
        }

        public static void mergeSort(List<int> vet)
        {
            var tam = vet.Count;
            merge_sort(vet,0,tam);
        }

        public static void merge_sort(List<int> vet, int a, int b)
        {
            int meio;

            if (a < b - 1)
            {
                meio = (a + b) / 2;
                merge_sort(vet, a, meio);
                merge_sort(vet, meio, b); 
                merge(vet, a, meio, b);       
            }
        }

        public static void merge(List<int> vet, int a, int meio, int b)
        {
            int i = a, j = meio, k = 0;
            int tam = b - a;
            int[] vetaux = new int[tam];

            while (i < meio && j < b)
            {
                if (vet[i] < vet[j])
                { 
                    vetaux[k++] = vet[i++];
                }
                else
                {
                    vetaux[k++] = vet[j++];
                }

            }
            while (i < meio)
            {  
                vetaux[k++] = vet[i++];
            }
            while (j < b)
            {
                vetaux[k++] = vet[j++];
            }

            for (i = a; i < b; i++)
            {
                vet[i] = vetaux[i - a];
            }
        }

        public static void quickSort(List<int> vet)
        {
            var tam = vet.Count;
            quick_sort(vet,0,tam-1,tam);
        }


        public static void quick_sort(List<int> vet, int inicio, int fim, int tamtotal)
        {
            int pivo;

            if (inicio < fim)
            {
                pivo = quick_partitions(vet, inicio, fim);
                quick_sort(vet, inicio, pivo - 1, tamtotal);
                quick_sort(vet, pivo + 1, fim, tamtotal);

            }
        }

        public static int quick_partitions(List<int> vet, int inicio, int fim)
        {
            int esq, dir, pivo, temp;
            esq = inicio;
            dir = fim;
            pivo = vet[inicio];

            while (esq < dir)
            {
                while (vet[esq] <= pivo && esq < dir)
                {
                    esq++;
                }
                while (vet[dir] > pivo)
                {
                    dir--;
                }
                if (esq < dir)
                {
                    temp = vet[dir];
                    vet[dir] = vet[esq];
                    vet[esq] = temp;
                }
            }

            vet[inicio] = vet[dir];
            vet[dir] = pivo;

            return dir;
        }

        public static void heapSort(List<int> vet, int tam)
        {
            int i, aux;

            for (i = (tam - 1) / 2; i >= 0; i--)
            {
                max_heap(vet, i, tam - 1);
            }
            for (i = tam - 1; i >= 1; i--)
            {
                aux = vet[0];
                vet[0] = vet[i];
                vet[i] = aux;
                max_heap(vet, 0, i - 1);
            }

        }

        public static void max_heap(List<int> vet, int pai, int fim)
        {
            int filho, aux;
            filho = 2 * pai + 1;
            aux = vet[pai];

            while (filho <= fim)
            {
                if (filho < fim)
                {
                    if (vet[filho] < vet[filho + 1])
                    {
                        filho++;
                    }
                }
                if (aux < vet[filho])
                {
                    vet[pai] = vet[filho];
                    pai = filho;
                    filho = 2 * pai + 1;
                }
                else
                {
                    filho = fim + 1;
                }
            }
            vet[pai] = aux;
        }

        public static void shellSort(List<int> vet, int tam)
        {
            int i, j, temp;
            int pulo = 1;

            do
            {
                pulo = (2 * pulo) + 1; 
            } while (pulo < tam);

            do
            {
                pulo = pulo / 2;

                for (i = pulo; i < tam; i++)
                {
                    temp = vet[i];
                    j = i - pulo;

                    while (j >= 0 && temp < vet[j])
                    { 
                        vet[j + pulo] = vet[j];
                        j = j - pulo;
                    }
                    vet[j + pulo] = temp;
                }

            } while (pulo > 1);
        }



    }
}