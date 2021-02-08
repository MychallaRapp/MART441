function getChoice1()
    {
      var userChoice = document.getElementById("choice").value;
      var myStory = document.getElementById("story");
      if(userChoice === "Yes")
       {
        document.getElementById("choice").style.display = "none";
        document.getElementById("btnSubmit").style.display = "none";

        document.getElementById("choice2").style.display = "block";
        document.getElementById("btnSubmit2").style.display = "block";
        
        myStory.innerHTML = "Liz decided to investigate the items and found out that it was common for her grandparents and their friends to travel to obscure locations. The trail ends there, but she finds someone related to a friend in one of the photos who has been following their trail. Should she join them? ";
       }
      else if(userChoice === "No")
       {
        myStory.innerHTML = "Liz decided to leave the journal and photos in the box. However, the next day she finds out that a relative of their grandparents best friend has been following in their footsteps trying to find why they went there. Should she go with them? ";
       }
      else
       {
        myStory.innerHTML = "Invalid Answer";
       }
    } 
function getChoice2()
 {
   var help = document.getElementById("choice2").value;
   var myStory = document.getElementById("story");
  if(help === "Yes")
    {
     document.getElementById("choice2").style.display = "none";
     document.getElementById("btnSubmit2").style.display = "none";

     document.getElementById("choice3").style.display = "block";
     document.getElementById("btnSubmit3").style.display = "block";
     
     myStory.innerHTML = "Liz reaches out to them and they introduce themselves as Alice. She explains that she also found pictures and had found two pieces of a map that the grandparents and their friends had left. Liz takes the box apart and finds a piece of her own! Should they follow the completed map?";
    }
   else if ("No")
    {
     myStory.innerHTML = "Liz chose to not reach out and a few weeks later she found out that the relative found a huge treasure chest! The relative contacts Liz and introduces themself as Alice. She says that she found another map leading to a diferent treasure in an abandoned mine and asks Liz if she wants to go with. Should she accept or refuse?";
    }
   else
    {
     myStory.innerHTML = "Invalid Answer";
    }
 }
function getChoice3()
 {
  var travel = document.getElementById("choice3").value;
  var myStory = document.getElementById("story");
  if(travel ==="Follow")
   {
    document.getElementById("choice3").style.display = "none";
    document.getElementById("btnSubmit3").style.display = "none";

    document.getElementById("choice4").style.display = "block";
    document.getElementById("btnSubmit3").style.display = "block";
    
   myStory.innerHTML = "Liz agrees to go to the location marked on the map with Alice and they find a tresure chest full of gold! They agree to split the gold and they both become close friends. Start over?";
   }
  else if(travel === "Stay Home")
   {
    myStory.innerHTML = "Liz gets a bad feeling and refuses. A few days later she finds out from Alice that the treasure had nothing but a note saying 'stop following my maps already'. Start over?";
   }
 }
function getChoice4()
 {
  var end = document.getElementById("choice4").value;
  var myStory = document.getElementById("story");
  if(end === "Yes")
   {
    document.getElementById("choice4").style.display = "none";
    document.getElementById("btnSubmit4").style.display = "none";

    document.getElementById("choice5").style.display = "block";
    document.getElementById("btnSubmit5").style.display = "block";
    
    myStory.innerHTML = "Spring cleaning. The time to throw open the windows and get the dust out of the house. For Liz this means entering the attic and going through another box of her family's things. These boxes were given to her when the last of her family passed away and every year she opens one box. Each box is labeled with the name of the family member it belonged to. However, while moving the remaining boxes in a way that won't completely block off access to most of the attic, she finds a box that isn't labeled. After opening it she finds pictures from the early 1900s with her Grandparents and their friends. Some of the pictures are labeled with the names of the people in the photos. At the bottom of the box is her Grandparents' journal detailing the adventures they went on. Should she investigate the journal and notebooks?";
   }
  else if(end === "No")
   {
    myStory.innerHTML = "Thank you for reading!";
   }
 }