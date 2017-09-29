var s = 60;
var padding = 20;

function setup() {
	// i like my canvas like my browser window 
	createCanvas(windowWidth, windowHeight);
	//some practical settings i like to use as default
	colorMode(HSB, 360, 100, 100, 1)
	ellipseMode(CENTER);
	rectMode(CENTER);
	angleMode(DEGREES);

	//put your setup code here
}


function draw() {
	

	strokeWeight(s);

	for(var posX = s; posX < width; posX = posX + s + padding) {
		for(var posY = s; posY < height; posY = posY + s + padding) {
			point(posX, posY);
		}
	}

	noLoop();

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}