class Ball {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution: 0.1,
          density:1.5
      }
      this.body = Bodies.circle(x,y,50,options);
      this.r=50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      rotate(angle);
      ellipseMode(RADIUS);
      stroke("white");
      fill("yellow");
      ellipse(pos.x, pos.y, this.r, this.r);
      pop();
    }
  };
