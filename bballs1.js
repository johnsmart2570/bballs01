// Ball object constructor
function Ball() {
    this.Xmin = 0; // top left X coord
    this.Ymin = 0; // top left y coord
    this.Height = 25;
    this.Width = 25;
    this.Xmax = this.Xmin + this.Width;
    this.Ymax = this.Ymin + this.Height;
    this.Xdir = 0; // 0 not moving, 1 moving right, -1 moving left
    this.Ydir = 0;
    this.Red = 0;
    this.Green = 0;
    this.Blue = 200;
    this.Opacity = 1;
    this.Speed = 1;
  }
  
  // Check for ball collision
  function CheckBallCollision(BallsArray, index) {
    for (var i = 0; i < BallsArray.length; i++) {
      if (index != i) {
        if (BallsArray[index].Xdir == 1) {
          if (BallsArray[index].Xmax >= BallsArray[i].Xmin) {
            if (
              (BallsArray[index].Ymin <= BallsArray[i].Ymin &&
                BallsArray[index].Ymax >= BallsArray[i].Ymin) ||
              (BallsArray[index].Ymax >= BallsArray[i].Ymax &&
                BallsArray[index].Ymin <= BallsArray[i].Ymax)
            ) {
              BallsArray[index].Xdir = -BallsArray[index].Xdir;
            }
          }
        } else if (BallsArray[index].Xdir == -1) {
          if (BallsArray[index].Xmin <= BallsArray[i].Xmax) {
            if (
              (BallsArray[index].Ymin <= BallsArray[i].Ymin &&
                BallsArray[index].Ymax >= BallsArray[i].Ymin) ||
              (BallsArray[index].Ymax >= BallsArray[i].Ymax &&
                BallsArray[index].Ymin <= BallsArray[i].Ymax)
            ) {
              BallsArray[index].Xdir = -BallsArray[index].Xdir;
            }
          }
        }
      }
    }
  }
  
  // HTML
  <canvas id="canvas" Width="400" Height="300"></canvas>
  
  // JavaScript
  function animate() {
    // ...
    CheckBallCollision(BallsArray, index);
    // ...
  }
  