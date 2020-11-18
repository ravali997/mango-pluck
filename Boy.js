class Boy {

constructor(x,y,width,height){

var options={

isStatic : true

  }

this.boy=Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
this.image = loadImage("boy.png");
World.add(world,this.boy);

 }

display(){

var pos=this.boy.position

push()

translate(pos.x,pos.y)
imageMode(CENTER)
image(this.image,0,0,this.width,this.height)

pop()

 }

}