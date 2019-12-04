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
  var message = prompt("Message")
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
    var width = prompt("Width:")
    var height = prompt("Height:")
    var xcoord = prompt("X:")
    var ycoord = prompt("Y:")
    while (width > 1024 || height > 512 || xcoord < 0 || ycoord < 0) {

    }
    var canvas = document.getElementById("student-canvas-2");
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    ctx.strokeRect( xcoord, ycoord, width, height);
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    // write your exercise 3 code here
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
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
