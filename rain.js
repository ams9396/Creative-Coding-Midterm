
class rain {
  
  // rain consists of small rectangles in diagonal lines. The constructor takes the x and y coordinates of the rectangles and their size.
    constructor(x, y, width, breadth) {
     this.x = x;
     this.y = y;
     this.w = width;
     this.b = breadth;
   }
   
   showRain() {
     fill(random(0,176),random(0,227),random(230,255),100)
     // 176,224,230

    //  each rectangle in an array is at a distance of +(15*i) from the previous one.
     for (let i=0; i<raindrops.length; i++) {
     rect(this.x+(15*i), this.y+(15*i), this.w, this.b)  
       noFill;
     }
   }
 }
 
 