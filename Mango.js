class Mango {

    constructor(x,y,width,height){
    
    var options={
    
    isStatic : true
    
      }
    
    this.mango=Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("mango.png");
    World.add(world,this.mango);
    
     }
    
    display(){
    
    var pos=this.mango.position
    
    push()
    
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    
    pop()
    
     }
    
    }