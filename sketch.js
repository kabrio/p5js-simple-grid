var objectSize, padding, totalSize;

function setup() {
	// i like my canvas like my browser window 
	createCanvas(windowWidth, windowHeight);
	//some practical settings i like to use as default
	colorMode(HSB, 360, 100, 100, 1)
	ellipseMode(CENTER);
	rectMode(CENTER);
	angleMode(DEGREES);

	//put more setup code here
	objectSize = min(width, height)/20;
	padding = objectSize/3;
	totalSize = objectSize + padding;
}


function draw() {

	strokeWeight(objectSize);

	for(var posX = totalSize; posX < width - totalSize; posX = posX + totalSize) {
		for(var posY = objectSize; posY < height - totalSize; posY = posY + totalSize) {
			point(posX, posY);
		}
	}

	noLoop();
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}