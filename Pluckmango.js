class Pluck{

        constructor(bodyA,pointB){

            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 10
            }
        this.bodyA = bodyA
        this.pointB = pointB;
        this.pluck = Constraint.create(options);
        World.add(world,this.pluck);

        }

       // fly(){

       // this.pluck.bodyA=null;

        //  }

        display(){

        if(this.pluck.bodyA){

        pointA = this.bodyA.position;
        pointB = this.pointB;


        line(pointA.x , pointA.y , pointB.x , pointB.y)



          } 

 }

} 