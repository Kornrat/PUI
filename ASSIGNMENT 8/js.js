///////////////////////////////////
//p5js




////////////////////////////////
////////////////////////////////
////////////////////////////////


    $(document).ready(function() {
            $("body").css("display", "none");
            $("body").fadeIn(2000);


    });






  


$(".project").hover(function hoov() {



	$(".project").not($(this)).addClass("outline");



	var imageselector = $(this).text();


	var link = "images/" + imageselector + ".png"

	$("#sideimage").attr("src",	link);

	$("#sideim").slideDown();









	}, function (){

		$(".project").removeClass("outline", 200000000, "easeOutBounce")
    	

	}

)

$(document).ready(function(){

	$(".project").click(function (){

		var linkselector = $(this).text();

		var gotolink = linkselector + ".html"

		console.log(gotolink)

		$("body").fadeOut(500, redirectPage);      



		function redirectPage() {
        		window.location = gotolink;
    }






	})




})





//$("body").css("background-image", "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)")



function setup(){
}




var r1 = 200
var r2 = 200
var r3 = 200
var speed = 10



function draw(){

	var cnv = createCanvas(windowWidth, 800)
	cnv.parent("#intro")


	var introT = select("#iText")
	var moreaboutme = select("#moreaboutme")

	var proj = select("#projects")
	var contactme = select("#contactme")






		push()

		strokeWeight(6)
		stroke(255,0,0)

	x1 = windowWidth/4
	x2 = 3*windowWidth/4
	y1 = windowHeight/4
	y2 = 3*windowHeight/4

 	var circle1 = ellipse(x2, y1,r1, r1)
 	var circle2 = ellipse(x1, y2,r2, r2)
 	var circle3 = ellipse(x2, y2,r3, r3)

 	proj.position(x1, y2)
 	moreaboutme.position(x2, y1)
 	contactme.position(x2, y2)


 	pop();



 	if(mouseX>windowWidth/2 && mouseY<windowHeight/2){
 		frameRate(10)
 		r1 = 370 + random(1,20)
 		r2 = 200
 		r3 = 200


 		changeText1();

 	} else if(mouseX>windowWidth/2 && mouseY>windowHeight/2){
 		frameRate(10)
 		r3 = 370 + random(1,20)
  		r1 = 200
 		r2 = 200

 		changeText3();
 	} else if(mouseX<windowWidth/2 && mouseY>windowHeight/2){
 		frameRate(10)
 		r2 = 370 + random(1,20)
  		r1 = 200
 		r3 = 200

 		changeText2();
 }
	introT.position(100, 0)

}


function changeText1(){

	$("#moreaboutme").html("I'm Fon. <br /> Currently a 4th year<br /> B.Arch and B.HCI student<br /> at Carnegie Mellon University.")
	$("#projects").html("Projects")
	$("#contactme").html("Contact Me")
}

function changeText2(){
	$("#moreaboutme").html("More <br /> about <br /> me")
	$("#projects").html("Projects<br />🡇")
	$("#contactme").html("Contact Me")


}

function changeText3(){
	$("#moreaboutme").html("More about me")
	$("#projects").html("Projects")
	$("#contactme").html("Email: <br />keuchuka@andrew.cmu.edu <br /><br />Facebook <br /><br />Instagram")
	
	}


function mousePressed(){

	if(mouseX<windowWidth/2 && mouseY>windowHeight/2){
		scrolling()
	}

}

function scrolling(){
		console.log("kasjdh")
		$('html,body').animate({scrollTop:($("#projectlist").offset().top)}
		, 1000);
	}



function aboutmelink(){

	$("body").css("cursor", "pointer")

	window.location = "aboutme.html"
}

function contactmelink(){

	$("body").css("cursor", "pointer")

	window.location = "contactme.html"
}







$("#intro").mouseout(function(){

	$("#iText").hide();
})


$("#intro").mouseenter(function(){

	$("#iText").show();
})
 






///////////////////////////////////

