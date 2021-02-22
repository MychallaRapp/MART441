var ImageTags = ["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10"];

var BlankImagePath = "images/mainImage.jpg";

var firstNumber = -1;

var secondNumber = -1;

var score = 0;

var allFound = 0;

var player = {"firstName":"","lastName":"","age":0,"score":0};

var ActualImages = new Array();

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
  var Count = [0,0,0,0,0,0,0,0,0,0];
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
  if(firstNumber >= 0)
   {
     secondNumber = number;
     document.getElementById(ImageTags[number]).src = ActualImages[number];
   }
  else if(firstNumber < 0)
   {
     firstNumber = number;
     document.getElementById(imageTags[firstNumber]).src = ActualImages[firstNumber];
   }
  if(ActualImages[secondNumber] != ActualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
   {
     score++;
     selfTimeout(imagesDisappear, 1000)
   }
  else if(ActualImages[secondNumber] == ActualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
   {
     firstNumber = -1;
     secondNumber = -1;
     if(allFound == ActualImages.length/2)
      {
        player.score = score;
        localStorage.setItem("playerInfo",JSON.stringify(player));
      }
   }
}
function imagesDisappear()
{
 document.getElementById(imageTags[firstNumber]).src = BlankImagePath;
 document.getElementById(imageTags[secondNumber]).src = BlankImagePath;
 firstNumber = -1;
 secondNumber = -1;
}
function AddToPlayer()
{
  var firstName = document.getElementById("txtFirstName").value;
  player.firstname = firstName;
  var lastName = document.getElementById("txtLastName").value;
  player.lastname = lastName;
  var Age = document.getElementById("txtAge").value;
  player.age = Age;
  localStorage.setItem("playerInfo",JSON.stringify(player));
  window.location = "index.html";
}
function playerInfo()
{
  var playerInformation = localStorage.getItem("playerInfo");
  player = JSON.parse(playerInformation);
  var str = "Name: " + player.firstname + " " + player.lastname + "<br>" + "Age: " + player.age + "<br>" + "Score: " + player.score;
  if(document.getElementById("endInformation") != null)
   {
     document.getElementById("endInformation").innerHTML = str;
   }
}
