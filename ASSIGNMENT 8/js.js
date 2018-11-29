
var r1 = 200 //variables for circle size 
var r2 = 200
var r3 = 200

var pX = 0;
var pY = 0;




$(".project").hover(function hoov() { //hover over project names


	$(".project").not($(this)).addClass("outline"); //change text style

	var imageselector = $(this).text();
	var link = "images/" + imageselector + ".png"

	$("#sideimage").attr("src",	link); //change image according to project


	}, function (){

		$(".project").removeClass("outline", 200000000, "easeOutBounce") //change text style when leaving each project name

	}

)





$(document).ready(function(){

	$("body").css("display", "none"); //fade effect when loading pages
    $("body").fadeIn(2000);

	$(".project").click(function (){ //when each project name is clicked

		var linkselector = $(this).text();
		var gotolink = linkselector + ".html"


		$("body").fadeOut(500, redirectPage);      

		function redirectPage() {
       		 window.location = gotolink; //link to each project page
   		}

	})

})




function setup(){
}





//p5//

	var sW = 6;

function draw(){

	var cnv = createCanvas(windowWidth, 800)
	cnv.parent("#intro")

	var introT = select("#iText") //grabbing html elements
	var moreaboutme = select("#moreaboutme")

	var proj = select("#projects")
	var contactme = select("#contactme")



	push();

	strokeWeight(sW);
	stroke(255,0,0);

	x1 = windowWidth/4
	x2 = 3*windowWidth/4
	y1 = windowHeight/4
	y2 = 3*windowHeight/4



 	var circle1 = ellipse(x2, y1,r1, r1) //top right circle
 	var circle2 = ellipse(x1, y2,r2, r2) //bottom left circle
 	var circle3 = ellipse(x2, y2,r3, r3) //bottom right circle

 	proj.position(x1, y2) //text positions
 	moreaboutme.position(x2, y1)
 	contactme.position(x2, y2)

 	pop();

 	introT.position(pX, pY)

 	if(mouseX>windowWidth/2 && mouseY<windowHeight/2){ //hover over top right circle

 		frameRate(10) 
 		r1 = 370 + random(1,20) //size change and shake
 		r2 = 200
 		r3 = 200
 		changeText1(); //text changes

 	} else if(mouseX>windowWidth/2 && mouseY>windowHeight/2){ //hover over bottom right circle

 		frameRate(10); 
 		r3 = 370 + random(1,20); //size change and shake
  		r1 = 200;
 		r2 = 200;
 		changeText3();//text changes

 	} else if(mouseX<windowWidth/2 && mouseY>windowHeight/2){ //hover over bottom left circle

 		frameRate(10)
 		r2 = 370 + random(1,20)//size change and shake
  		r1 = 200
 		r3 = 200
 		changeText2(); //text changes

 	} else if(mouseX<windowWidth/2 && mouseY<windowHeight/2){

 		frameRate(10);
 		pX = pX + random(-5,10)
 		pY = pY + random(-5,10)
 		changeText4();

 	}

//p5 MEDIA CHANGES
function myFunction(x) {
    if (x.matches) { // If media query matches

 

        sW = 1;

 	if(mouseX>windowWidth/2 && mouseY<windowHeight/2){ //hover over top right circle

 		frameRate(10) 
 		r1 = 200 + random(1,5) //size change and shake
 		r2 = 100
 		r3 = 100
 		changeText1(); //text changes

 	} else if(mouseX>windowWidth/2 && mouseY>windowHeight/2){ //hover over bottom right circle

 		frameRate(10); 
 		r3 = 200 + random(1,5); //size change and shake
  		r1 = 100;
 		r2 = 100;
 		changeText3();//text changes

 	} else if(mouseX<windowWidth/2 && mouseY>windowHeight/2){ //hover over bottom left circle

 		frameRate(10)
 		r2 = 200 + random(1,5)//size change and shake
  		r1 = 100
 		r3 = 100
 		changeText2(); //text changes

 	} else if(mouseX<windowWidth/2 && mouseY<windowHeight/2){

 		frameRate(10);
 		pX = pX + random(-2,2)
 		pY = pY + random(-2,2)
 		changeText4();

 	}


    } 
}

var x = window.matchMedia("(max-width: 500px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes 
}

//

function changeText1(){ //text change for top right circle

	$("#moreaboutme").html("I'm Fon. <br /> Currently a 4th year<br /> B.Arch and B.HCI student<br /> at Carnegie Mellon University.")
	$("#projects").html("Projects")
	$("#contactme").html("Contact Me")

}

function changeText2(){ //text change for bottom left circle

	$("#moreaboutme").html("More <br /> about <br /> me")
	$("#projects").html("Projects<br />🡇")
	$("#contactme").html("Contact Me")

}

function changeText3(){//text change for bottom right circle

	$("#moreaboutme").html("More <br /> about <br /> me")
	$("#projects").html("Projects")
	$("#contactme").html("Email: <br />keuchuka@andrew.cmu.edu <br /><br />Facebook <br /><br />Instagram")
	
}

function changeText4(){//text change for bottom right circle

	$("#moreaboutme").html("More <br /> about <br /> me")
	$("#projects").html("Projects")
	$("#contactme").html("Contact Me")
	
}



function mousePressed(){ 

	if(mouseX<windowWidth/2 && mouseY>windowHeight/2){ //mouse click to go to projects
		scrolling(); //scrolls
	}
}



function scrolling(){

	$('html,body').animate({scrollTop:($("#projectlist").offset().top)} //scrolls smoothly down to top of project list
	, 1000);
}



/// MEDIA QUERY - RESPONSIVE SITE///

