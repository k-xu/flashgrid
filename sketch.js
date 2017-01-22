function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
}

function draw() {

     var counter = 0
     background(255, 2);
    
    while (counter < 100) {
        //text(counter, 10,10)
        
        if (counter = counter + 1) {
            strokeWeight(random(10));
            stroke(255, random(255), random(255), random(100), random(255));
            fill(random(255), random(255), 255, random(100));
        }
        rect(counter*10, counter*10, mouseX, mouseY)
        
        if (touchIsDown === true)
            rect(counter*10, counter*10, touchX, touchY);
        
        counter = counter + 1
        
    }


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

   

