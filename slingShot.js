class SlingShot{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            length:5,
            stiffness:0.19

        }
        this.pointB=pointB;
this.sling=Matter.Constraint.create(option);
World.add(world,this.sling);


    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        if(this.sling.bodyA){
        
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}
