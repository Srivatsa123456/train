class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
       // this.sling1 = loadImage('sprites/sling1.png');
       
        this.Slingshot = Constraint.create(options);
        World.add(myWorld, this.Slingshot);
    }
   
   show(){
       
     
            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.Slingshot.bodyB.position;
           
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}