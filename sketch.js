 //This is an avatar generator, the user clicks and the code will give a random avatar.
let images = [];
let currentImage;

function preload() {
  // I've made a bunch of sprites with different faces and hairstyles.
  images[0] = loadImage("blue 1.jpg");
  images[1] = loadImage("blue 30.jpg");
  images[2] = loadImage("blue 4.jpg");
  images[3] = loadImage("blue 5.jpg");
  images[4] = loadImage("blue 6.jpg");
  images[5] = loadImage("blue 7.jpg");  
  images[6] = loadImage("blue 8.jpg");
  images[7] = loadImage("blue 9.jpg");
  images[8] = loadImage("green 0.jpg");
  images[9] = loadImage("green 1.jpg");
  images[10] = loadImage("green 2.jpg");
  images[11] = loadImage("green 3.jpg");
  images[12] = loadImage("green 4.jpg");
  images[13] = loadImage("green 5.jpg");  
  images[14] = loadImage("green 8.jpg");
  images[15] = loadImage("green 9.jpg");
  images[16] = loadImage("purpl 9.jpg");
  images[17] = loadImage("purpl 1.jpg");
  images[18] = loadImage("purpl 2.jpg");
  images[19] = loadImage("purpl 3.jpg");
  images[20] = loadImage("purpl 6.jpg");
  images[21] = loadImage("purpl 5.jpg");  
  images[22] = loadImage("purpl 7.jpg");
  images[23] = loadImage("purpl 8.jpg");
  images[24] = loadImage("red 1.jpg");
  images[25] = loadImage("red 2.jpg");
  images[26] = loadImage("red 3.jpg");
  images[27] = loadImage("red 4.jpg");
  images[28] = loadImage("red 5.jpg");
  images[29] = loadImage("red 6.jpg");
  images[30] = loadImage("red 7.jpg");
  images[31] = loadImage("red 8.jpg");  
  images[32] = loadImage("yellow 1.jpg");
  images[33] = loadImage("yellow 2.jpg");
  images[34] = loadImage("yellow 3.jpg");
  images[35] = loadImage("yellow 4.jpg");
  images[36] = loadImage("yellow 5.jpg");
  images[37] = loadImage("yellow 6.jpg");
  images[38] = loadImage("yellow 7.jpg");
  images[39] = loadImage("yellow 8.jpg");
}
function setup() {
  createCanvas(400, 400);
  textSize(24);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(252, 200, 209);
  if (currentImage) {
    // display the current image
    image(currentImage, 0, 0);
  } else {
    // Message for before an image shows
    text("CLICK TO GENERATE AN AVATAR!!", width / 2, height / 2);
  }
}

function mouseClicked() {
  // chooses a random avatar from the selection.
  currentImage = random(images);
}