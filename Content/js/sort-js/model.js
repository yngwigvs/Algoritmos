function padraoInicializacaoElementos(n, alturaMaxima, largura) {

    this.setStart = function (n) {
        var tamDiv = $(window).width() * 0.85;
        this.start = (tamDiv - this.offset * n) / 2
    };

    this.setY = function (alturaMaxima) {
        var tamDiv = $(window).height() * 0.7;
        this.y = ((tamDiv + alturaMaxima) / 3).toFixed(0);
    }

    this.setLargura = function (n,largura) {
        var tamDiv = $(window).width() * 0.85;
        var padding = 100;
        var espaco = tamDiv - 2*padding;
        this.largura = espaco/n;
    }

    this.alturaMaxima = alturaMaxima;
    this.setY(alturaMaxima);
    this.setLargura(n,largura);
    this.offset = this.largura + 5;
    this.setStart(n);

    

}



function Elemento(val, x, y, altura) {
    this.val = val;
    this.x = x;
    this.y = y;
    this.xImaginary = x;
    this.yImaginary = y;
    this.altura = altura;
    this.focus = false;
    this.sorted = false;
    this.blockedForAction = false;


    this.setX = function (valor) {
        this.x = incremento;
    };

    this.setY = function () {
        this.y = this.val * padrao.alturaMaxima / maior;
    }

    this.isBlocked = function(){
        if(this.blockedForAction){
            return true;
        }
        else{
            return false;
        }
    };

}



function VetorElementos(elementos, vetor, maior) {

    this.elementos = elementos;
    this.vetor = vetor;
    this.maior = maior;


    this.fixVetor = function () {
        for (index in this.vetor) {
            vetor[index] = vetor[index].toFixed(0);
        }
    };

}