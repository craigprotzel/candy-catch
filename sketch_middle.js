//Initialize some global variables
var player;
var candies;
var candiesEaten = 0;

function setup() {
	//Initialize the canvas
	createCanvas(800,600);

	//Make the main player
	player = createSprite(width/2, height/2, 60, 60);
	player.shapeColor = color(255,255,0);

	//Make a 'group' to store the candies
	candies = new Group();
	//Use a 'for loop' to initialize the candy sprites
	//Within the loop, add each candy to the candies group 
	var numCandies = 8;
	for (var i = 0; i < numCandies; i++){
		var candy = createSprite(random(0,width), random(0,height), 20, 20);
		candies.add(candy);
	}
}

function draw() {
	//Redraw the background every time draw is called
	background(0,0,175);

	//Update the player position according to the mouse position
	player.position.x = mouseX;
	player.position.y = mouseY;

	//If the player hits a member of the candies group, call the 'candyCollision' function
	player.collide(candies, candyCollision);

	//Draws the sprites to the page
	drawSprites();

	fill(255);
	textSize(24);
	textAlign(CENTER);
	text("Score: " + candiesEaten, width-80, 36);
}

function candyCollision(player, candy){
	console.log("Nom nom!");
	//Remove the candy from the sketch
	candy.remove();
	//Increase the number of candies eaten
	candiesEaten = candiesEaten + 1;
}