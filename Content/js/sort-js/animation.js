
function reserva(sortAnimationData){

    var listaBlocos = sortAnimationData.listaBlocos;
    var blocosLength = listaBlocos.length;

    for(i = 0; i < blocosLength; i++){

        var bloco = listaBlocos[i];
        var vetorEstados = bloco.vetorEstados;
        var vetorLength = vetorEstados.length;

        for(j = 0; j < vetorLength; j++){

            var estado = vetorEstados[j];
            animate(estado);
        }
    }

    console.log(sortAnimationData);
}

function performAnimation(sortAnimationData){
    
    sortAnimationData.listaBlocos.forEach(function(bloco){
        
        bloco.vetorEstados.forEach(function(estado){
            animate(estado);

        });
    });
}

function animate(estado) {
    var indexBefore = estado.indexBefore;
    var indexAfter = estado.indexAfter;
    var inFocus = estado.inFocus;

    var gBefore = $("#g-" + indexBefore)[0];
    var gAfter = $("#g-" + indexAfter)[0];

    gBefore.setAttributeNS(null, 'id', "g-" + indexAfter);
    gAfter.setAttributeNS(null, 'id', "g-" + indexBefore);

    swapPosition(gBefore, gAfter);
    swap(vetorElementos.vetor, indexBefore, indexAfter);

}

function swapPosition(atual, futuro) {
    var tAtual = atual.getAttribute("transform");
    var tFuturo = futuro.getAttribute("transform");

    atual.setAttributeNS(null, 'transform', tFuturo);
    futuro.setAttributeNS(null, 'transform', tAtual);
}

function swap(vetor, i, j) {
    aux = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = aux;
}



function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
