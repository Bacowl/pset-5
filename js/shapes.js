window.onload = function() {
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
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  var message = prompt("Message:")
  var canvas = document.getElementById("student-canvas-1");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.height, canvas.width);
  while (message.length > 50) {
    alert("Your message is too long. Keep it under 50 characters")
    var message = prompt("Message")
  }

  ctx.font="48px Sans-serif";

  ctx.strokeText(message, 30, 70);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
  var canvas = document.getElementById("student-canvas-2");
  var ctx = canvas.getContext('2d');

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


    ctx.strokeRect(xcoord, ycoord, width, height);
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  var canvas = document.getElementById("student-canvas-3");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.height, canvas.width);
  var error = 1;
  ctx.fillstyle;
while (error == 1) {
  var color = prompt("Color:");
  var color = color.toUpperCase();
  var colorLower = color.toLowerCase();
  if (color == "BLACK") {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.rect(10, 10, 100, 50);
    ctx.fill();
    ctx.fillRect(10, 10, 100, 50);
    --error
  } else if (color == "BLUE") {
      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.rect(10, 10, 100, 50);
      ctx.fill();
      --error
  } else if (color == "GREEN") {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.rect(10, 10, 100, 50);
    ctx.fill();
    ctx.fillRect(10, 10, 100, 50);
    --error
  } else if (color == "ORANGE") {
    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.rect(10, 10, 100, 50);
    ctx.fill();
      ctx.fillRect(10, 10, 100, 50);
      --error
  } else if (color == "PURPLE") {
      ctx.beginPath();
      ctx.fillStyle = "purple";
      ctx.rect(10, 10, 100, 50);
      ctx.fill();
      --error
  } else if (color == "RED") {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(10, 10, 100, 50);
    ctx.fill();
    --error
  } else if (color == "YELLOW") {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(10, 10, 100, 50);
    ctx.fill();
    --error
  } else {
      alert(colorLower + " is not a supported color.")
  }
}
};



/*
 * Exercise 4.
 */

const drawTriangle = function() {
  var canvas = document.getElementById("student-canvas-4");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.height, canvas.width);
  var start = 0;
  while (height*height + base*base !== hypot**2 || height+25 > canvas.height || base + 25 > canvas.width || start == 0) {
    var side1 = prompt("Side 1:");
    var side2 = prompt("Side 2:");
    var side3 = prompt("Side 3:");
    var height = Math.min(side1, side2, side3);
    var hypot = Math.max(side1, side2, side3) ;
    var base = Number(side1) + Number(side2) + Number(side3) - hypot - height;
    ++start
    if (height**2 + base **2 != hypot**2) {
      alert("That's not a valid right triangle")
    } else if (height+25 > canvas.height || base + 25 > canvas.width) {
      alert("The triangle won't fit on the canvas.")
    }
  }
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(25, 25 + height);
  ctx.lineTo(25 + base, 25 + height)
  ctx.lineTo(25, 25)
  ctx.stroke();
};


/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
