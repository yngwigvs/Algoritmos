$(document).ready(main);

var svgNS = "http://www.w3.org/2000/svg";
var vetorElementos;
var alturaMaxima = 200;
var larguraMaxima = 90;
var padrao = new padraoInicializacaoElementos(15, alturaMaxima, larguraMaxima);
var speed = 1000;

function main() {

    randomArray();

    $(document).on("click", "#action-show", mostrarBarra);
    $(document).on("click", "#new-array", novoVetor);
    $(document).on("keydown", ".novo-elemento-vetor", proximoElemento);
    $(document).on("click", "#input", inputArray);
    $(document).on("click", "#random", randomArray);
    $(document).on("click", "#sorted", sortedArray);
    $(document).on("click", "#unsorted", unsortedArray);
    $(document).on("click", "#sort", sortArray);
    $(document).on("click", ".complete", alterarProgresso);


    $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
    });


}


function normalizeSvgCanvasElement(vetorElementos, elementosSvgCanvas) {


    if (vetorElementos.length > elementosSvgCanvas.length) {
        var qtd = vetorElementos.length - elementosSvgCanvas.length;
        addInSvg(qtd, elementosSvgCanvas);
    }
    else if (vetorElementos.length < elementosSvgCanvas.length) {
        var qtd = elementosSvgCanvas.length - vetorElementos.length;
        removeInSvg(qtd, elementosSvgCanvas);
    }
}

function addInSvg(qtd, elementosSvgCanvas) {

    var svgCanvas = $("#svg-canvas")[0];
    var quantidadeElementos = elementosSvgCanvas.length;
    var tamanhoFinal = quantidadeElementos + qtd;

    for (var i = quantidadeElementos; i < tamanhoFinal; i++) {
        var translate = "translate(" + "0" + "," + "0" + ")";
        var g = document.createElementNS(svgNS, "g");
        var rect = document.createElementNS(svgNS, "rect");
        var text = document.createElementNS(svgNS, "text");

        $(g).addClass("animation");
        g.setAttributeNS(null, 'id', 'g-' + i);
        g.setAttributeNS(null, 'transform', translate);
        g.addEventListener("click", moveClick);

        rect.setAttributeNS(null, 'fill', "#207edb");
        //rect.setAttributeNS(null, 'transform', "rotate(20deg)");

        text.setAttributeNS(null, 'fill', "white");
        text.setAttributeNS(null, 'font-size', "20px");

        g.appendChild(rect);
        g.appendChild(text);
        svgCanvas.appendChild(g);
    }

}

function removeInSvg(qtd, elementosSvgCanvas) {
    var svgCanvas = $("#svg-canvas")[0];

    for (var i = 0; i < qtd; i++) {
        var ultimo = elementosSvgCanvas.length - 1;
        svgCanvas.removeChild(elementosSvgCanvas[ultimo]);
    }
}

function atualizeSvgElement(vetorElementos) { // << completar
    var elementos = vetorElementos.elementos;
    var elementosSvgCanvas = $("#svg-canvas")[0].childNodes;


    for(var i = 0; i < elementos.length; i++){
        var g = elementosSvgCanvas[i];
        var gRect = g.childNodes[0];
        var gText = g.childNodes[1];

        var elemento = elementos[i];
        var translate = "translate(" + elemento.x + "," +  elemento.y + ")";

        var xText = elemento.x;
        var yText = elemento.y ;

        g.setAttributeNS(null, 'transform', translate);
     
        gRect.setAttributeNS(null, 'height', elemento.altura);
        gRect.setAttributeNS(null, 'width', padrao.largura);
        //rect.setAttributeNS(null, 'transform', "rotate(20deg)");


        gText.textContent = elemento.val;
        gText.setAttributeNS(null, 'x', padrao.largura/3);
        gText.setAttributeNS(null, 'y', 0);
        gText.setAttributeNS(null, 'fill', "white");
        gText.setAttributeNS(null, 'font-size', "20px");
    }


}


function moveClick() {
    var i = 2;
    var gFuturo = $("#g-" + i)[0];

    var atual = $(this)[0];
    var futuro = $(gFuturo)[0];

    var tAtual = atual.getAttribute("transform");
    var tFuturo = futuro.getAttribute("transform");


    atual.setAttributeNS(null, 'transform', tFuturo);
    futuro.setAttributeNS(null, 'transform', tAtual);

}

function mostrarBarra() {

    var pane = $(this);
    var actions = $("#actions");
    var icon = pane.parent().find("[id=hide-show-options]");

    if (icon.hasClass("rotate-icon-left")) {
        //icon.removeClass("rotateIconLeft");
        //icon.addClass("rotateIconRight");

        icon.removeClass("rotate-icon-left");
        icon.addClass("rotate-icon-right");

        actions.removeClass("bounceInRight");
        actions.addClass("bounceOutRight");

        $("#new-array-options").addClass("invisible");
        

    }
    else {
        icon.removeClass("rotate-icon-right");
        icon.addClass("rotate-icon-left");

        actions.removeClass("invisible bounceOutRight");
        actions.removeClass("bounceOutRight");
        actions.addClass("bounceInRight");
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
        var x = (padrao.start + padrao.offset * index).toFixed(0);
        var altura = (val * padrao.alturaMaxima / maior).toFixed(0);
        var elemento = new Elemento(val,x,padrao.y,altura);

        elementos.push(elemento);
    }

    return elementos;
}

function getRandomArray() {
    var vetor = new Array();
    var qtd = Math.floor(Math.random() * 15) + 5;
    padrao.setStart(qtd);

    for (var i = 0; i < qtd; i++) {
        var num = Math.floor(Math.random() * 50) + 1;
        vetor.push(num);
    }

    padrao = new padraoInicializacaoElementos(qtd,alturaMaxima,larguraMaxima);
    var vetorElementos = atualizaVetorElementos(vetor);

    return vetorElementos;
}

function randomArray() {
    var vetorElementos = getRandomArray();
    var elementosSvgCanvas = $("#svg-canvas")[0].childNodes;

    normalizeSvgCanvasElement(vetorElementos.vetor, elementosSvgCanvas);
    atualizeSvgElement(vetorElementos);

}

function sortedArray() {
    var vetor = new Array();
    var qtd = 15;
    padrao.setStart(qtd);

    for (var i = 0; i < qtd; i++) {
        var num = random(1, 50);
        vetor.push(num);
    }
    //sort(vetor);
    atualizaVetorElementos(vetor);

}

function unsortedArray() {
    var vetor = new Array();
    var qtd = 15;
    padrao.setStart(qtd);

    for (var i = 0; i < qtd; i++) {
        var num = random(1, 50);
        vetor.push(num);
    }
    //unsort(vetor);
    atualizaVetorElementos(vetor);
}


function atualizaVetorElementos(vetor) {
    var vetor = vetor;

    var maior = maiorElemento(vetor);
    var elementos = inicializarElementos(vetor, padrao, maior);

    vetorElementos = new VetorElementos(elementos, vetor, maior);
    vetorElementos.fixVetor();

    return vetorElementos;
}


function sortArray() {
    $.ajax({
        url: "/InsertionSort/ordenar",
        type: "POST",
        data: JSON.stringify(vetorElementos.vetor),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data.data);
            performAnimation(data.data);
        },
        error: function (data) {
            console.log(data);
        }
    });

}

















///////////* Radial Progress Bar *///////////




function alterarProgresso(){

        // Get percentage of progress
        data = $(this);
        percent = parseInt(data[0].getAttribute('data-percentage'));
        percent = percent + 5;
        // Get radius of the svg's circle.complete
        radius = $(this).find($('circle.complete')).attr('r');
            
        
        console.log(radius);


        // Get circumference (2πr)
        circumference = 2 * Math.PI * radius;
        // Get stroke-dashoffset value based on the percentage of the circumference
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
        
        data[0].setAttributeNS(null, 'data-percentage', percent);
        $('.percentage')[0].innerHTML = percent + '%';  
        console.log($('.percentage')[0].innerHTML);


}

function inputArray() {
    var inputDiv = $("#new-array-input")[0];

    console.log(inputDiv);

    inputDiv.style.display = "block";
    console.log(inputDiv);
     
}