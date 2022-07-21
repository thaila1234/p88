//const { fabric } = require("./fabric");

// Crie uma variável canvas
var canvas = new fabric.Canvas('myCanvas');

//Defina as posições iniciais da bola e do buraco.
ballX = 0;
ballY = 0;
holeY = 400;
holeX = 800;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
    fabric.Image.fromURL("gol-h.png", function(Img) {
        holeObj = Img;
        holeObj.scaleToWidth(50);
        holeObj.scaleToHeight(50);
        holeObj.set({
            top:holeY,
            left:holeX
        });
        canvas.add(holeObj);
    });
	newImage();
}

function newImage()
{
	// Escreva o código para enviar a imagem da bola ao canvas
    fabric.Image.fromURL("ball.png",function(Img) {
        ballObj = Img;
        ballObj.scaleToWidth(50);
        ballObj.scaleToHeight(50);
        ballObj.set({
            top:ballY,
            left:holeX
        });
        canvas.add(ballObj);    
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	
        if ((ballX == holeX) && (ballY == holeY)){
            canvas.remove(ballObj);
            document.getElementById("hd3").innerHTML = "Você atingiu o obtivo!!!";
            document.getElementById("myCanvas").style.borderColor = "red";
        }

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.

        if (ballY >= 0){
            ballY = ballY - blockImageHeight;
            canvas.remove(ballObj);
            newImage();
        }
	}

	function down()
	{
	     // Escreva o código para mover a bola para baixo.

        if (ballY <= 450){
            ballY = ballY + blockImageHeight;
            canvas.remove(ballObj);
            newImage();
        }
    }

	function left()
	{
		if(ballX > 7)
		{
			// Escreva o código para mover a bola para a esquerda.
            ballX = ballX - blockImageWidth;
            canvas.remove(ballObj);
            newImage();
		}
	}

	function right()
	{
		if(ballX <= 1050)
		{
			// Escreva o código para mover a bola para a direita.
            ballX = ballX + blockImageWidth;
            canvas.remove(ballObj);
            newImage();
		}
	}
