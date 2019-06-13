window.onload = function(){
	var canvas;
	var ctx;
	var xCoord = 0		//a gauche et au
	var yCoord = 270; 	//milieu 
	var delay = 1; //temps de pause en millisecondes
	var bord = 0;
	
	function init(){
		canvas = document.createElement('canvas');
		canvas.width = 600; //largeur
		canvas.height = 600; //longueur
		canvas.style.border = "2px solid"; //bordure: trait de 2 pixel
		document.body.appendChild(canvas); //accrocher le grand encadrement a la page
		ctx = canvas.getContext('2d');
		
		refreshScreen(); 
	}
	
	function refreshScreen(){
		if(xCoord == 0)
			bord = 1;
		else if((yCoord + 20) == 600)
			bord = 2;
			else if((xCoord + 20) == 600)
				bord = 3;
				else if(yCoord == 0)
					bord = 4;
				
		switch(bord){
			case 1: xCoord += 1;
					yCoord += 1;
					break;
					
			case 2: xCoord += 1;
					yCoord -= 1;
					break;
			
			case 3: xCoord -= 1;
					yCoord -= 1;
					break;
			
			case 4: xCoord -= 1;
					yCoord += 1;
					break;
			
			default: break;
		}
		
		
		ctx.clearRect(0,0,canvas.width,canvas.height); //effacer l'ancien objet
		ctx.fillStyle = '#0000ff'; //couleur de l'objet
		ctx.fillRect(xCoord, yCoord, 20, 20); //position de l'objet
		
		setTimeout(refreshScreen, delay); //recursivite par intermittence
	}
	
	
	//////////////////////////////////////
	init();
	
	
}
