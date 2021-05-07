class rock{
    constructor(x,y,width,height)
{
    var options ={ isStatic: true}
    
    this.body =  Bodies.rectangle(x,y,width,height,options);
    World.add(myWorld,this.body);
    this.width = width;
    this.height = height;
    this.image=loadImage("images/rock.png")
    Matter.Body.setMass(this.body,this.body.mass*300)
  }
  show()
  {
      var pos=this.body.position
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width, this.height);
  }


}

