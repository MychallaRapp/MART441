var canvas;
var ctx;
var x = 30;
var y = 30;
var rectangle1, rectangle2;
var directions;
var questions;
var rectArray = [];
var lives = 3;

$(document).ready(function()
{
  setup();
  $(this).keypress(function(event)
  {
    getKey(event);
  });
});
function setup()
{
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  rectangle1 = new Rectangle(20,30,50,20,"#37802c")
  rectangle2 = new Rectangle(40,40,100,50,"#2c3880")
  $.getJSON("data/info.json",function(data)
  {
    for(var i = 0; i < data.rectangles.length; i++)
    {
      rectArray.push(new Rectangle(data.rectangles[i].x,data.rectangles[i].y,data.rectangles[i].h,data.rectangles[i].w,data.rectangles[i].color));
    }
    drawRectangles();
  });
}
function getKey(event)
{
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);
  if(actualLetter == w)
  {
    moveUp();
    direction = "up";
  }
  else if(actualLetter == "s")
  {
    moveDown();
    direction = "down";
  }
  else if(actualLetter == "a")
  {
    moveLeft();
    directions = "left";
  }
  else if(actualLetter == "d")
  {
    moveRight();
    directions = "right";
  }
  var test = hasCollided(rectange1,rectangle2);
  var test2 = false;
  for(var i = 0; i < rectArray.length; i++)
  {
    test2 = hasCollided(rectangle1,rectArray[i]);
    if(test2 == true)
    {
      break;
    }
  }
    if(test || test2)
    {
      lives--;
      if(direction == "left")
      {
        moveRight();
      }
      else if(direction == "right")
      {
        moveLeft();
      }
      else if(direction == "up")
      {
        moveDown();
      }
      else if(direction == "down")
      {
        moveUp();
      }
    }
    drawRectangles();
}
function moveUp()
{
  rectangle1.y-=10;
}
function moveDown()
{
  rectangle2.y+=10;
}
function moveLeft()
{
  rectangle1.x-=10;
}
function moveRight()
{
  rectangle2.x+=10;
}
function drawRectangles()
{
  ctx.clearRect(0,0,900,700);
  ctx.fillStyle = rectangle1.mainColor;
  ctx.fillRect(rectangle1.x,rectangle1.y,rectangle1.width,rectangle1.height);
  ctx.fillStyle = rectangle2.mainColor;
  ctx.fillRect(rectangle2.x,rectangle2.y,rectangle2.width,rectangle2.height);
  for(var i = 0; i < rectArray.length; i++)
  {
    ctx.fillStyle = rectArray[i].mainColor;
    ctx.fillRect(rectArray[i].x,rectArray[i].y,rectArray[i].width,rectArray[i].height);
  }
  ctx.font = "20px Century Gothic";
  ctx.fillText("Lives: " + lives, 10, 50);
}
function hasCollided(object1,object2)
{
  return!(
    ((object1.y + object1.height) <(object2.y)) ||
    (object1.y > (objecct2.y + object2.height)) ||
    ((object1.x + object1.width) < object2.x) ||
    (object1.x > (object2.x + object2.width))
  );
}
