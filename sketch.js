// this sketch depicts a thunderstorm scene. When the user clicks on the screen there lightening and sound of thunder.


//Global variables
let bg;
let clouds = [];
let x = 0;
let y = 0;
let cloudy;
let raindrops = [];
let raindrops1 = [];
let raindrops2 = [];
let raindrops3 = [];
let raindrops4 = [];
let raindrops5 = [];
let raindrops6 = [];
let raindrops7 = [];
let raindrops8 = [];
let raindrops9 = [];
let raindrops10 = [];
let raindrops11 = [];
let raindrops12 = [];
let raindrops13 = [];
let raindrops14 = [];
let raindrops15 = [];
let raindrops16 = [];
let raindrops17 = [];
let raindrops18 = [];
let raindrops19 = [];
let raindrops20 = [];
let raindrops21 = [];
let raindrops22 = [];
let light = [];
let thunder;


// Loading background image and audio file. 
// Background image was taken from https://www.vecteezy.com/video/1625795-lightning-storm-time-lapse. 
// Audio file was taken from https://www.youtube.com/watch?v=mF3ROkKc084&ab_channel=FreeifyMusic

function preload(){
  bg = loadImage('lightning-storm.jpeg')
  thunder = loadSound('Thunder Crack (320kbps).mp3');
}


// Setting up canvas size, populating arrays

function setup() {
  //createCanvas(1920,1080);960,540
  createCanvas(900,720);
  // thunder.play()
  
  for (let i = 0; i < 50; i++){
    x = 30+random(0,800)
    y = 100+random(0,100)
    
    clouds[i] = new cloud(x, y, random(0,7)); 
    
  }
  
  // Creating rain streams objects

  for (let i = 0; i<100; i++){
    raindrops[i] = new rain(150, 140, 5, 10)
    raindrops1[i] = new rain(200, 150, 5, 10)
    raindrops2[i] = new rain(250, 140, 5, 10)
    raindrops3[i] = new rain(300, 150, 5, 10)
    raindrops4[i] = new rain(350, 140, 5, 10)
    raindrops5[i] = new rain(400, 150, 5, 10)
    raindrops6[i] = new rain(450, 140, 5, 10)
    raindrops7[i] = new rain(500, 150, 5, 10)
    raindrops8[i] = new rain(550, 140, 5, 10)
    raindrops9[i] = new rain(600, 150, 5, 10)
    raindrops10[i] = new rain(650, 140, 5, 10)
    raindrops11[i] = new rain(700, 150, 5, 10)
    raindrops12[i] = new rain(750, 140, 5, 10)
    raindrops13[i] = new rain(800, 150, 5, 10)
    raindrops14[i] = new rain(850, 140, 5, 10)
    raindrops15[i] = new rain(0, 150, 5, 10)
    raindrops16[i] = new rain(50, 140, 5, 10)
    raindrops17[i] = new rain(100, 150, 5, 10)
    raindrops18[i] = new rain(0, 240, 5, 10)
    raindrops19[i] = new rain(0, 350, 5, 10)
    raindrops20[i] = new rain(0, 440, 5, 10)
    raindrops21[i] = new rain(0, 550, 5, 10)
    raindrops22[i] = new rain(0, 600, 5, 10)
  }
  
  // Creating lightening array
  for (let i = 0; i<10; i++){
  light[i] = new lightening(600, 150, 215, random(0,350), 500, 700)
  }
  
}

function draw() {
  
//   Display background
  background(bg);
  
  
  //   display clouds
  for (let i = 0; i < clouds.length; i++){
  clouds[i].drawCloud()

  }
  // displaying rain
  
  for (let i = 0; i < raindrops.length; i++){
    raindrops[i].showRain()
    raindrops1[i].showRain()
    raindrops2[i].showRain()
    raindrops3[i].showRain()
    raindrops4[i].showRain()
    raindrops5[i].showRain()
    raindrops6[i].showRain()
    raindrops7[i].showRain()
    raindrops8[i].showRain()
    raindrops9[i].showRain()
    raindrops10[i].showRain()
    raindrops11[i].showRain()
    raindrops12[i].showRain()
    raindrops13[i].showRain()
    raindrops14[i].showRain()
    raindrops15[i].showRain()
    raindrops16[i].showRain()
    raindrops17[i].showRain()
    raindrops18[i].showRain()
    raindrops19[i].showRain()
     raindrops20[i].showRain()
    raindrops21[i].showRain()
    raindrops22[i].showRain()
    
}
  
// Adding user interaction, when mouse is pressed lightening strikes, clouds get enlarged and thunder sound plays.

  if (mouseIsPressed == true){
  thunder.play()
  //   enlarge clouds
  for (let i = 0; i < random(5); i++){
  clouds[i].enlargeCloud()
  }
    
  for (let i = 0; i<light.length; i++){
    light[i].createLight();
  }  

}

}



  