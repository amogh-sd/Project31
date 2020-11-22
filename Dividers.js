class Division
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			restitution:10,
			density:5
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var divisionPos=this.body.position;		

			push()
			translate(divisionPos.x, divisionPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,18,100)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}
