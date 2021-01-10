class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.4,
          density:0.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      rotate(angle);
      rectMode(CENTER);
      stroke("green");
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
