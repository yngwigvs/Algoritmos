function padraoInicializacaoElementos(n, alturaMaxima, largura) {

    this.setStart = function (n) {
        this.start = (canvas.width - this.offset * n) / 2
    };

    this.setY = function (alturaMaxima) {
        this.y = (canvas.height + alturaMaxima) / 2;
    }

    this.alturaMaxima = alturaMaxima;
    this.largura = largura;
    this.setY(alturaMaxima);
    this.start = this.setStart(n);
    this.offset = this.largura + 5;

    

}



function Elemento(val, x, altura) {
    this.val = val;
    this.x = x;
    this.altura = altura;


    this.setX = function (incremento) {
        this.x += incremento;
    }



}



function Vetor(elementos,maior) {

    this.elementos = elementos;
    this.maior = maior;

    this.show = function(padrao){
        for(index in this.elementos){
            var elemento = this.elementos[index];
            //p = createP(elemento.val);
            rect(elemento.x,padrao.y,padrao.largura,-elemento.altura);
        }
    };

    this.moveRight = function (index) {
        if (index < this.elementos.length - 1) {
            var elemento = this.elementos[index];
            var altura = elemento.altura;
            var start = elemento.x;

            for (var j = 0; j < padrao.offset; j++) {
                elemento.x += 1;
                rect(elemento.x, padrao.y, padrao.largura, -altura);
            }

            this.moveLeft(index + 1);
        }

        swap(this.elementos, index, index + 1);
        console.log(this.elementos);
    };

    this.moveLeft = function (index) {
        noLoop();
        if (index > 0) {
            console.log(index);
            var elemento = this.elementos[index];
            var altura = elemento.altura;
            console.log(elemento);

            for (j = 0; j < padrao.offset; j++) {
                elemento.x -= 1;
                console.log(elemento.x);
                rect(elemento.x, padrao.y, padrao.largura, -altura);
            }

        }
        loop();
    };

    this.clicked = function () {
        for (index in this.elementos) {
            var elemento = this.elementos[index];
            var dx = mouseX - elemento.x;
            var dy = padrao.y - mouseY;

            if (dx <= padrao.largura && dx > 0 && dy <= elemento.altura && dy > 0) {
                this.moveRight(parseInt(index));
            }


        }


    };

    this.removeElement = function (i) {
        elementos.splice(index, 1);
    };   


    this.swap = function (i, j) {
        var aux = this.elementos[i];
        this.elementos[i] = this.elementos[j];
    };

    this.atualizaVetorElementos = function (vetor) {
        this.elementos.splice(0, this.elementos.lenght);

        for (index in vetor) {

        }
    }

}