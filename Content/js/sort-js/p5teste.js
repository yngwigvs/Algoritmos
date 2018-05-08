var vetorElementos;
var canvas;
var padrao = new padraoInicializacaoElementos(15, 200, 45);
var blue;
var green
var orange;
var red;
var zoom = 10;
var s;

function setup() {
    canvas = createCanvas(1100, 600, SVG);
    padrao = new padraoInicializacaoElementos(15, 200, 45);
    centerCanvas(); 
    randomArray();
    frameRate(120);
    blue = color(32, 126, 219);
    green = color(29, 183, 78);
    orange = color(224, 142, 11);

}

function draw() {
    background(52, 58, 64);
    rect(30,20,55,55,20,15,10,5);
    //vetorElementos.show(padrao);
    
    //svg element
}

function drawElement(elemento){
    var cor = blue;

    if (elemento.focus === true) {
        cor = green;
    }
    else if (elemento.sorted === true) {
        cor = orange;
    }

    fill(cor);
    noStroke();
    rect(elemento.x, elemento.y, padrao.largura, -elemento.altura);
    
    fill(255);
    textSize(20);
    
    var xText = elemento.x;
    var yText = elemento.y - 10;

    if(elemento.val < 10){
        xText += padrao.largura/2.5;
       
        if(elemento.val < 8)
            yText += -elemento.altura;
    }
    else{
        xText += padrao.largura/4;
    }
    
    text(elemento.val,xText,yText);

}




function centerCanvas(){
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function windowResized() {
    resizeCanvas(windowWidth/1.6,windowHeight/2.35);
    centerCanvas();
}

function mousePressed(){
    vetorElementos.clicked();

}
