var ImageTags = ["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10"];

var BlankImagePath = "images/mainImage.JPG";

var ActualImages = new array(10);

function printBlanks()
{
  createRandomImageArray();
  for(var I = 0; I < ImageTags.length; I ++)
  {
    document.getElementById(ImageTags[I]).src = BlankImagePath;
  }
}
function createRandomImageArray()
{
  var ActualImagePath = ["images/bat.png","images/circle.jpg","images/ghost.png","images/leaf.jpg","images/octagon.jpg","images/rectangle.png","images/square.png","images/star.png","images/trapezoid.png","images/triangle.png"];
  var Count = [0,0];
  while(ActualImages.length < 10)
  {
    var RandomNumber = Math.floor (Math.random() * ActualImagePath.length)
    if(Count[RandomNumber] < 2)
    {
      ActualImages.push(ActualImagePath[RandomNumber]);
      Count[RandomNumber] = Count[RandomNumber] + 1;
    }
  }
}
function flipImage(number)
{
  document.getElementById(ImageTags[number]).src = ActualImages[number];
}
