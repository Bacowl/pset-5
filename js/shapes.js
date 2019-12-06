window.onload = function() {
<<<<<<< HEAD
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
=======
    onmouseclick
>>>>>>> 701d2215564d4b7b2c712fa3558d1eb6e757db68
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  var message = prompt("Message:")
  while (message.length > 50) {
    alert("Your message is too long. Keep it under 50 characters")
    var message = prompt("Message")
  }
  var canvas = document.getElementById("student-canvas-1");
  var ctx = canvas.getContext('2d');
  ctx.font="48px Sans-serif";
  ctx.clearRect(0, 0, canvas.height, canvas.width);
  ctx.strokeText(message, 30, 70);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
<<<<<<< HEAD
    var width = prompt("Width:");
    var height = prompt("Height:");
    var xcoord = prompt("X:");
    var ycoord = prompt("Y:");

    var width = Number(width);
    var height = Number(height);
    var xcoord = Number(xcoord);
    var ycoord = Number(ycoord);

    while (width+xcoord > 1024 || height+ycoord > 512 || xcoord < 0 || ycoord < 0) {
      if ((width+height+xcoord+ycoord)*0 !== 0) {
        alert("One of your values is not a number")
      } else if (height > 1024 || height < 1) {
        alert("Your height must be between 1 and 1024")
      } else if (width > 512 || width < 1) {
        alert("Your width must be between 1 and 512")
      } else if (xcoord > 1024 || height < 1) {
        alert("Your y-coordinate must be between 1 and 512")
      } else if (xcoord > 1024 || height < 1) {
        alert("Your y-coordinate must be between 1 and 512")
      } else if (width+xcoord > 1024 || height+ycoord > 512) {
        alert("Your rectangle won't fit on the canvas.")
      }
      var width = prompt("Width:")
      var height = prompt("Height:")
      var xcoord = prompt("X:")
      var ycoord = prompt("Y:")
    }
    var canvas = document.getElementById("student-canvas-2");
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    ctx.strokeRect( xcoord, ycoord, width, height);
=======

>>>>>>> 701d2215564d4b7b2c712fa3558d1eb6e757db68
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
<<<<<<< HEAD
  var color = prompt("Color:");
  var canvas = document.getElementById("student-canvas-3");
  var ctx = canvas.getContext("2d");
  var color = color.toUpperCase()

switch (color) {
  case BLACK:
    ctx.fillstyle = "red"
    break;
  case BLUE:
    ctx.fillstyle = "blue"
    break;

}

  ctx.clearRect(0, 0, canvas.height, canvas.width);
  ctx.strokeRect( 10, 10, 100, 50);
=======

>>>>>>> 701d2215564d4b7b2c712fa3558d1eb6e757db68
};




/*
 * Exercise 4.
 */

const drawTriangle = function() {
<<<<<<< HEAD
    // write your exercise 4 code here
=======

>>>>>>> 701d2215564d4b7b2c712fa3558d1eb6e757db68
};

/*
 * Exercise 5.
 */

const drawFace = function() {
<<<<<<< HEAD
    // write your exercise 4 code here
=======

>>>>>>> 701d2215564d4b7b2c712fa3558d1eb6e757db68
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
<<<<<<< HEAD
    // write your exercise 5 code here
=======

>>>>>>> 701d2215564d4b7b2c712fa3558d1eb6e757db68
};
