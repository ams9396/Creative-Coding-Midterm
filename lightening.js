class lightening {
  
    constructor(a, b, m, n, x, y) {
     this.a = a;
     this.b = b;
     this.m = m
     this.n = n
     this.x = x
     this.y = y
   }
   
   createLight (){
     strokeWeight(6);
     // stroke(255, 0, 255);
     stroke(220)
     line(this.a, 90, 85, this.b);
     strokeWeight(4);
     line(85, this.b, 210, this.m);
     line(210, this.m, this.n, 305*random(50));
     strokeWeight(2);
     line(this.n, 305*random(50), this.x, this.y);
     line(this.x, this.y, 505+random(100), 800);
   }
 }
 