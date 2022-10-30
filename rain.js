
class rain {
  
    constructor(x, y, width, breadth) {
     this.x = x;
     this.y = y;
     this.w = width;
     this.b = breadth;
   }
   
   showRain() {
     fill(random(0,176),random(0,227),random(230,255),100)
     // 176,224,230
     for (let i=0; i<raindrops.length; i++) {
     rect(this.x+(15*i), this.y+(15*i), this.w, this.b)  
       noFill;
     }
   }
 }
 
 