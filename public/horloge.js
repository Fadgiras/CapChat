var horloge		= $("#horloge"),
	temps 		= $("#temps"),
	start 		= $("#start"),
	pause 		= $("#pause"),
	continu 	= $("#continue");

function lancer() {
	start.on("click", (e) => {
		e.preventDefault();
		setTimer(window.t);
		
		start.hide();
		pause.show();
	});
	
	pause.on("click", function (e) {
		e.preventDefault();
		clearTimeout(window.t);
		
		stop(1, true);
		
		temps.css("opacity", .5);
		$(this).hide();
		continu.show();
	});
	
	continu.on("click", function (e) {
		e.preventDefault();
		temps.css("opacity", 1);
		
		stop(1, false);
		
		setTimeout(() => {
			setTimer(window.intOffset);
		}, 350);
		
		$(this).hide();
		pause.show();
	});
	
	setTimer(window.t);
};


function fini()
{
	start.show();
	pause.hide();
	continu.hide();
}

function changeColor(angle) {	
	angle = 6.29 - angle;
	
	if (Math.floor(72+55*angle) < 255 || Math.floor(214+14*angle) < 255) {
		return 'rgb(' + Math.floor(72+55*angle) + ',' + Math.floor(214+14*angle) + ',0)';	
	} else {
		return 'rgb(' + Math.floor(255) + ',' + Math.floor(597-(90*angle)) + ',0)';
	}
}

function setTimer(timer) {
	var debut = new Date();
	debut = debut.getTime();
	
	debuter(debut, timer);
	
	horloge.show();
	temps.show();
}

function debuter(debut,timer) {
	var d = new Date();
	full= 0.001*(60000/window.initT);
	window.intOffset = timer - (d.getTime() - debut);
	
	temps.html(Math.ceil(window.intOffset / 1000));
	
	window.angle = 0.1048335*full*window.intOffset;
					
	drawHorloge(1);
					
	if(window.intOffset <= 0) {
		fini();	
	} else {
		window.t = setTimeout("debuter(" + debut + "," + timer + ")",50);
	}
	window.pourcent = ( (d.getTime() - debut)*100 ) / timer;
}

function stop(timeElapsed,pause)
{		
	animeTime = 100;
	
	diff = timeElapsed / animeTime;
	
	if(pause)
	{
		pourcent = 1 - diff;
		if(pourcent < 0)
			pourcent = 0;
	} else {
		pourcent = diff;
		if(pourcent > 1)
			pourcent = 1;
	}				
						
	drawHorloge(pourcent);
	
	if(timeElapsed < animeTime)
	{
		setTimeout(function(){
			stop((timeElapsed + 10),pause);
		},10);
		//console.log(window.t)
	}
}

function drawHorloge(pourcent) {
	var canvas = document.getElementById("horloge"),
		ctx = canvas.getContext("2d");
	
	ctx.clearRect(0,0,65,400);
	
	// ctx.beginPath();
	// ctx.globalAlpha = 1;
	// ctx.arc(150,150,140,0,6.283,false);
	// ctx.arc(150,150,105,6.283,((Math.PI*2)),true);
	// ctx.fillStyle = "#bbb";
	// ctx.fill();
	// ctx.closePath();
	
	ctx.beginPath();
	ctx.globalAlpha = 1;
	// ctx.arc(150,150,140.1,-1.57,(-1.57 + window.angle),false);
	// ctx.arc(150,150,105,(-1.57 + window.angle),((Math.PI*2) -1.57),true);
	ctx.fillStyle = changeColor(window.angle);
	ctx.fillRect(0, 0, 65, 400);
	
	ctx.fillStyle = "rgba(229, 231, 235)";
	//console.log(window.pourcent)
	ctx.fillRect(0, 0, 65, 400*(window.pourcent/100));
	
	ctx.fill();
	ctx.closePath();
	
	// ctx.beginPath();
	// ctx.arc(150,150,(105 * pourcent),0,6.283,false);
	// ctx.fillStyle = "#fff";
	// ctx.fill();
	ctx.closePath();
}