//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
gcar_width=75;
gcar_height=100;

bkgd_image = "parkingLot.jpg";
gcar_image = "car2.png";

//Set initial position for a car image.
gcar_x=5;
gcar_y=225;

function add() {
	background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=bkgd_image;

    gcar_imgTag=new Image();
    gcar_imgTag.onload=uploadgreencar;
    gcar_imgTag.src=gcar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(gcar_imgTag, gcar_x, gcar_y, gcar_width, gcar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
	//Define function to move the car upward
	if (gcar_y >=10)
     {
         gcar_y-=10;
         uploadBackground();
         uploadgreencar();

     }
}

function down()
{
	//Define function to move the car downward
	if (gcar_y <=500)
     {
         gcar_y+=10;
         uploadBackground();
         uploadgreencar();

     }
}

function left()
{
	//Define function to move the car left side
	if (gcar_x >=0)
     {
         gcar_x-=10;
         uploadBackground();
         uploadgreencar();

     }
}

function right()
{
	//Define function to move the car right side
	if (gcar_x <=700)
     {
         gcar_x+=10;
         uploadBackground();
         uploadgreencar();

     }
}
