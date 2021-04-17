class Snow{
      constructor(x,y){
      var options = {
            'restitution' : 0.3,
           'fricition' : 0.5,
           'density' : 1.0,
      }
      this.image = loadImage("snow2.png");
      this.smokeImage = loadImage("snow4.png");
      this.trajectory =[];
}
}
display(){

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
  
      for(var i=0; i<this.trajectory.length; i++){
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      }
    }
