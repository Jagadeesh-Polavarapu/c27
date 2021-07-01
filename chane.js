class Chane {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.04
        }
        this.chane = Constraint.create(options);
        World.add(world,this.chane);
    }
    display(){
     var pointA =   this.chane.bodyA.position
     var pointB =   this.chane.bodyB.position
     line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}