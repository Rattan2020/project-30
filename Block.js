class Block {

    constructor(x,y){

        var options= {
        isStatic:false,
        friction:10,
        density:1
        }

        this.body=Bodies.rectangle(x,y,40,40,options);
        this.image=loadImage("block.png");
        this.Visibility=255;
         this.width=40;
         this.height=40;
         
        World.add(world,this.body);

    }

    display(){
 
var pos=this.body.position;


//console.log(this.body.speed);
if (this.body.speed<3){

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);

}
else {
    World.remove(world,this.body);
         push();
   this.Visibility=this.Visibility-5;
   tint(255,this.Visibility);
   imageMode(CENTER);
   image(this.image,pos.x,pos.y,this.width,this.height);
     pop();
}
    }

    }
 
