class Bob {
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            restitution: 1,
            fricition: 0,
            density: 0.8            
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate();
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x,pos.y,this.radius);      
        pop();
      }
    };