class Box{
    constructor(x,y,width,height){
//properties
//build your objects
//add it to the World
//JSON
var box_options= {
    'restitution': 0.8,
    'friction':0.3,
    'density':1.0
  }
  this.width= width
  this.height= height
  this.body= Bodies.rectangle(x,y,width,height,box_options);
  World.add(world,this.body);
    }
    display(){
        var p= this.body.position
        var a= this.body.angle
        push()
        translate(p.x,p.y)
        rotate(a);
        fill("lime")
        //equivalent p5 is used to display the body
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
    }
}