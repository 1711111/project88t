
canvas = new fabric.Canvas("myCanvas");
ball_x = 10;
ball_y = 10;
hole_y = 200;
hole_x = 400;
ctx = canvas.getContext("2d");

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		var hole_obj = Img;
		hole_obj.scaleToWidth = (-5);
		hole_obj.scaleToHeight = (-5);
		hole_obj.set({
	    top: hole_y,
		left:hole_x
		});
		canvas.add("golf-h.png",hole_x,hole_y);

	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth = (50);
		ball_obj.scaleToHeight = (50);
		ball_obj.set({
			top: ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x == hole_x) && (ball_y == hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "You have hit the goal";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	else{
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
		// Write a code to move ball upward.
		if (ball_y > 0){
			ball_y = ball_y - block_image_height;
			console.log("Ball's height is " + block_image_height);
			console.log("The current X axis value of the ball is "+ball_x+" and the current Y axis value is "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if (ball_y <= 500){
			ball_y = ball_y + block_image_height;
			console.log("Ball's height is " + block_image_height);
			console.log("The current X axis value of the ball is "+ball_x+" and the current Y axis value is "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			ball_x = ball_x - block_image_height;
			console.log("Ball's height is " + block_image_height);
			console.log("The current X axis value of the ball is "+ball_x+" and the current Y axis value is "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=950)
		{
			// Write a code to move ball right side.
			ball_x = ball_x + block_image_height;
			console.log("Ball's height is " + block_image_height);
			console.log("The current X axis value of the ball is "+ball_x+" and the current Y axis value is "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

