class Ball{

constructor(x,y,radius){



var options={
restitution:0.8,
density:10 
}

this.body=Bodies.circle(x,y,radius,options);
this.radius=radius;

World.add(world,this.body);
}




display(){

var pos=this.body.position;
var angle=this.body.angle;

translate(pos.x,pos.y);
rotate(angle);

push();
     fill(140,12,60);
     strokeWeight(5);
     stroke(247,0,247);
     ellipseMode(RADIUS);
     ellipse(0,0,this.radius*2,this.radius*2);
pop();
}


}