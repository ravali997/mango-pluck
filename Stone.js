class Stone {

    constructor(x,y,width,height){
    
    var options={
    
    isStatic : false
    
      }
    
    this.stone = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("stone.png");
    World.add(world,this.stone);
    
     }
    
    display(){
    
    var pos=this.stone.position
    
    push()
    
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    
    pop()
    
     }     

    }