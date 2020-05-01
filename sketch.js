let pantalla = 0;
let cuadrados = [];
let circulos = [];
let imaIntro;
let imaJuego;
let imaError;
let imaError1;
let imaError2;
let contaFiguras = 0;
let error1 = false;
let error2 = false;
let error3 = false;
let cuadraBoo = false;


function preload(){
    imaIntro = loadImage("imagenes/ima1.png");
    imaJuego = loadImage("imagenes/imaJuego.png");
    imaError = loadImage("imagenes/ima2.png");
    imaError1 = loadImage("imagenes/imaError.png");
    imaError2 = loadImage("imagenes/imaError2.png");
}
function setup(){
    createCanvas(800,800);
}
function draw(){
    switch(pantalla){
        case 0://pantalla de escoger # de figs
        image(imaIntro,0,0);
        
        textSize(80);
        fill(255);
        text(contaFiguras,376,425);

        if(error1==true){
            image(imaError,0,0);
        }

        break;

        case 1:
        image(imaJuego,0,0);

        drawFigu();
        textSize(30);
        text(contaFiguras,391,412);

        if(error2==true){
            image(imaError1,0,0);
        }
        if(error3==true){
            image(imaError2,0,0);
        }
        break;


    }
}
function mousePressed(){
    switch(pantalla){
        case 0://pantalla de escoger # de figs
        error1=false;
            if(mouseX > 330 && mouseX < 375 && mouseY > 530 && mouseY < 575){
                try{
                    if(contaFiguras == 0 ){
                        contaFiguras = 0;
                        throw new cantidadExcep("Cantidad erronea");
                    }else{
                        contaFiguras --;
                    }
                }catch(error){
                    error1 = true;
                }
            }

            if(mouseX > 425 && mouseX < 470 && mouseY >530 && mouseY <575){
                try{
                    if(contaFiguras == 10){
                        contaFiguras = 10;
                        throw new cantidadExcep("Cantidad erronea");
                    }else{
                        contaFiguras ++;
                    }
                }catch(error){
                    error1 = true;
                }
                
                console.log(error1);
            }

            if(mouseX > 310 && mouseX < 490 && mouseY > 635 && mouseY < 670){
                pantalla ++;

                for(let i = 0; i < contaFiguras; i++){
                    circulos[i] = new circulo();
                }
            }

        break;

        case 1: // pantalla juego
        error2 = false;
        error3 = false;
            if(mouseX>30 && mouseX<185 && mouseY>734 && mouseY<766){
                agregarFigu();
            }
            if(mouseX>213 && mouseX<365 && mouseY>734 && mouseY<766){
                eliminarFigu();
            }
            if(mouseX>448 && mouseX<600 && mouseY>734 && mouseY<766){
                tamaFigu();
            }
            if(mouseX>628 && mouseX<780 && mouseY>734 && mouseY<766){
                agregarCuadra();
            }

        break;

    }
}
            
 function drawFigu(){
    for(let i = 0; i<circulos.length;i++){
        circulos[i].pintar((i*30)+10);
        circulos[i].move();
    }
    for(let j =0; j<cuadrados.length;j++){
        cuadrados[j].pintar((j*30)+423);
        cuadrados[j].move();
    }
}
function agregarFigu(){
    try{
        if(contaFiguras==10){
            contaFiguras = 10;
            throw new cantidadExcep("Cantidad erronea");
        }else{
            contaFiguras ++;
            circulos.push(new circulo());

            if(cuadraBoo == true){
                cuadrados.push(new cuadrado());
            }

        }
    }catch(error){
        error2 = true;
    }
}

function eliminarFigu(){
    try{
        if(contaFiguras==1){
            contaFiguras = 1;
            throw new cantidadExcep("Cantidad erronea");
        }else{
            contaFiguras --;
            circulos.pop();
            
            if(cuadraBoo==true){
                cuadrados.pop();
            }
        }
    }catch(error){
        error3 = true;
    }
}

function tamaFigu(){
    circulos.forEach(element=> {
        element.setTama();
    })
    cuadrados.forEach(element=>{
        element.setTama();
    })
}
function agregarCuadra(){
    if(cuadraBoo==false){
        cuadrados = circulos.map(element=>{
            return element = new cuadrado();
        })
        cuadraBoo = true;
    }
}