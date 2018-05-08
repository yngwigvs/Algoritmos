$(document).ready(main);


function main() {

    $(document).on("click", "#action-show", mostrarBarra);
    $(document).on("click", "#new-array", novoVetor);
    $(document).on("click", "#sort", ordenar);
    $(document).on("keydown", ".novo-elemento-vetor", proximoElemento);
    $(document).on("click", "#random", randomArray);

}

function mostrarBarra() {

    var pane = $(this);
    var actions = $("#actions");
    var icon = pane.parent().find("[id=hide-show-options]");

    if (icon.hasClass("fa-chevron-right")) {
        icon.addClass("fa-chevron-left");
        icon.removeClass("fa-chevron-right");
        actions.removeClass("invisible");
        actions.addClass("animated bounceInLeft");

    }
    else {
        icon.addClass("fa-chevron-right");
        icon.removeClass("fa-chevron-left");
        actions.removeClass("bouceInLeft");
        actions.addClass("invisible");
        

        $("#new-array-options").addClass("invisible");
    }

}

function novoVetor() {
    var input = $("#new-array-options");

    if (input.hasClass("invisible")) {
        input.removeClass("invisible");
    }
    else {
        input.addClass("invisible");
    }

}


function ordenar() {
}


function proximoElemento(event) {

    if (event.keyCode == 13) {
        var campoAtual = $(this);
        console.log(this);


        if (campoAtual.next() != null && this.value != "") {
            campoAtual.addClass("novo-elemento-preenchido-vetor");
            var proximo = campoAtual.next();
            proximo.focus();
        }

    }

}



function criarVetor() {
    var valx = parseInt($("#value").val());
    var valy = parseInt($("#value2").val());
    var valw = parseInt($("#value3").val());
    var valz = parseInt($("#value4").val());

    var x = new Elemento(valx);
    var y = new Elemento(valy);
    var w = new Elemento(valw);
    var z = new Elemento(valz);  
        

    var elementos = new Array();

    elementos.push(x);
    elementos.push(y);
    elementos.push(w);
    elementos.push(z);
    
    var maior = maiorElemento(elementos);
    
    vetorElementos = new Vetor(elementos,maior);
    vetorElementos.initializeElements();

    console.log(vetorElementos);
  
}

function maiorElemento(vetor){
    var maior = 0;

    for(index in vetor){
        
        if(vetor[index] > maior)
            maior = vetor[index];
    }

    return maior.toFixed(0);
}

function inicializarElementos(vetor, padrao, maior) {
    var elementos = new Array();

    for (index in vetor) {
        var val = vetor[index].toFixed(0);
        var x = padrao.start + padrao.offset * index;
        var altura = val * padrao.alturaMaxima / maior;
        var elemento = new Elemento(val,x,altura);

        elementos.push(elemento);
    }

    return elementos;
}

function randomArray() {
    var vetor = new Array();
    var qtd = 15;
    padrao.setStart(qtd);

    for (var i = 0; i < qtd; i++) {
        var num = random(1, 50);
        vetor.push(num);
    }

    var maior = maiorElemento(vetor);
    var elementos = inicializarElementos(vetor, padrao, maior);

    vetorElementos = new Vetor(elementos, maior);
}


function swap(vetor, i, j) {
    var aux = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = aux;


}