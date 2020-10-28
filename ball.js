class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.6,
            friction:0.2,
            density:0.3
        }
        this.radius = radius;
        this.ball = Bodies.circle(x,y,radius,options)
        World.add(world,this.ball)
        
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.ball.position.x,this.ball.position.y,this.radius);
        
    }
}