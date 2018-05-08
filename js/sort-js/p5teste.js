var vetorElementos;
var canvas;
var padrao;

function setup() {
    canvas = createCanvas(1000, 500);
    padrao = new padraoInicializacaoElementos(15, 150, 30);
    centerCanvas(); 

    randomArray();

}

function draw() {
    background(10, 29, 89);
    vetorElementos.show(padrao);
}

function centerCanvas(){
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function windowResized() {
    centerCanvas();
}

function mousePressed(){
     vetorElementos.clicked();
}


