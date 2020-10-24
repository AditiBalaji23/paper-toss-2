class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic' : false
        }
       
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        this.image = loadImage("paper.png");
        
        World.add(world, this.body);
    }
        
   
   //display(){
     //  imageMode(CENTER)
       
    //fill("red");
    //ellipseMode(RADIUS);
    //ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
  // }
   display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    //stroke('blue')
    fill('red')
   imageMode(CENTER);
  image(this.image,0,0,this.width,this.height)
  Matter.Body.Scale = 0.5;
  pop();
  }
}
