class Dustbin {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      restitution: 0.8,
      friction: 1,
      density: 1,
    };
    this.thickness = 20;
    this.bbody = Bodies.rectangle(x, y, width, this.thickness, options);
    this.lbody = Bodies.rectangle(
      x - width / 2,
      y - height / 2,
      this.thickness,
      height,
      options
    );
    this.rbody = Bodies.rectangle(
      x + width / 2,
      y - height / 2,
      this.thickness,
      height,
      options
    );
    this.width = width;
    this.height = height;
    World.add(world, this.bbody);
    World.add(world, this.rbody);
    World.add(world, this.lbody);
  }
  display() {
    var bpos = this.bbody.position;
    var rpos = this.rbody.position;
    var lpos = this.lbody.position;
    rectMode(CENTER);
    fill("red");
    rect(bpos.x, bpos.y, this.width, this.thickness);
    rect(lpos.x, lpos.y, this.thickness, this.height);
    rect(rpos.x, rpos.y, this.thickness, this.height);
  }
}
