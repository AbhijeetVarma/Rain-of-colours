class Particles {
    constructor(x, y,r) {
      var options = {
        'isStatic': false,
          'restitution':0.8,
          'friction':3,
          'density':2
      }
      this.radius = r;
      this.body = Bodies.circle(x, y, r, options);
      
      this.color = color(random(0,225),random(0,225),random(0,225))
      
            
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(this.color)
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };