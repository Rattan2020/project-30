class Sling{

constructor(bodyA,pointB){

var options={
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.008
}
this.sling=Constraint.create(options); 
World.add(world,this.sling);
}
attach(body){
    this.sling.bodyA=body;
}

fly(){
    this.sling.bodyA = null;
}
display(){

    if (this.sling.bodyA){
var posA=this.sling.bodyA.position;
var posB=this.sling.pointB;

strokeWeight(3);
line(posA.x,posA.y,posB.x,posB.y);

    }
    
}
}

