class Paper { 
constructor(x,y,r) {
   var options={ 
     isStatic:false,
     restitution:0.3, 
     friction:0.5, 
     density:1.2
     } 
     this.body=Bodies.circle(x, y, 20, options) 
     this.radius=50
    World.add(world, this.body); 
    }
     display() { 
       var pos=this.body.position;
       rectMode(CENTER) 
       strokeWeight(3);
      fill(255,0,255)
       circle(pos.x,pos.y,40);
      }
     }