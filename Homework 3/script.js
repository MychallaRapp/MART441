function storyFunction(choice)
 {
  var answer1 = document.getElementById("choice1").innerHTML;
  var answer2 = document.getElementById("choice2").innerHTML;
  if (choice == 1 && answer1 == "stay near your car")
   {
    document.getElementById("story").innerHTML = "You decide its too dangerous to leave and hope for someone else to drive by.";
    document.getElementById("choice1").innerHTML = "Get in the car to stay warm";
    document.getElementById("choice2").innerHTML = "Walk down road to find other cars";
   }
  else if (choice == 2 && answer2 == "enter forest")
   {
    document.getElementById("story").innerHTML = "You enter the forest to go to the house to find help. There is a path that leads in another direction.";
    document.getElementById("choice1").innerHTML = "follow lights";
    document.getElementById("choice2").innerHTML = "follow path";
   }
  else if (choice == 1 && answer1 == "Get in the car to stay warm")
   {
    document.getElementById("story").innerHTML = "As the sky gets darker you decide to get in your car to stay warm. You see a shadow move in the tree line.";
    document.getElementById("choice1").innerHTML = "Stay in car";
    document.getElementById("choice2").innerHTML = "Follow it";
   }
  else if (choice == 2 && answer2 == "Walk down road to find other cars")
   {
    document.getElementById("story").innerHTML = "You decide to try and find other cars on your own. You come across a vehicle on the side of the road with its lights off.";
    document.getElementById("choice1").innerHTML = "Approach vehicle";
    document.getElementById("choice2").innerHTML = "Go back to your own car";
   }
  else if (choice == 1 && answer1 == "follow lights")
   {
    document.getElementById("story").innerHTML = "You decide to leave the path and just head for the lights. The door opens as you approach.";
    document.getElementById("choice1").innerHTML = "Leave and never return";
    document.getElementById("choice2").innerHTML ="Appreciate the hospitality and enter";
   }
  else if (choice == 2 && answer2 == "follow path")
   {
    document.getElementById("story").innerHTML = "You decide to stick to the safety of the path. As it leads you away from the house you see another light up ahead.";
    document.getElementById("choice1").innerHTML = "Decide to keep following strange lights";
    document.getElementById("choice2").innerHTML = "Shake head and leave";
   }
  else if (choice == 1 && answer1 == "Stay in car")
   {
    document.getElementById("story").innerHTML = "You decide you don't want to get murdered tonight. After waiting a few minutes, a tow truck comes by and you go home" + "<br>repeat?";
    document.getElementById("choice1").innerHTML = "Sure I'll go again";
    document.getElementById("choice2").innerHTML = "No thanks, I'm done";
   }
  else if (choice == 2 && answer2 == "Follow it")
   {
    document.getElementById("story").innerHTML = "You decide to throw safety to the wind and follow the strange creature. Its a fairy on its way to a party in the forest. The fairy invites you to come along.";
    document.getElementById("choice1").innerHTML = "Thank them for the kind invitation and follow";
    document.getElementById("choice2").innerHTML = "Thank them for the kind invitation and refuse";
   }
  else if (choice == 1 && answer1 == "Approach vehicle")
   {
    document.getElementById("story").innerHTML = "As you approach the other vehicle another person appears from the other side. They apologize for scaring you and offer to give you a ride to town after changing their tire.";
    document.getElementById("choice1").innerHTML = "Accept and go with them";
    document.getElementById("choice2").innerHTML = "Refuse and return to your car";
   }
  else if (choice == 2 && answer2 == "Go back to your own car")
   {
    document.getElementById("story").innerHTML = "You decide to avoid danger and go back. After several hours the sun rises and you realize that the strange building in the forest is your shed that was blocking the view of your house. You sheepishly go home" +"<br>repeat?";
    document.getElementById("choice1").innerHTML ="Sure I'll go again";
    document.getElementById("choice2").innerHTML = "No thanks, I'm done";
   }
  else if (choice == 1 && answer1 == "Leave and never return")
   {
    document.getElementById("story").innerHTML = "You decide that entering a stranger's house uninvited is rude. However as you look around you see that the building you almost entered is a shed and the actual is next to it. You realize its your house and go to sleep." + "<br>repeat?";
    document.getElementById("choice1").innerHTML ="Sure I'll go again";
    document.getElementById("choice2").innerHTML = "No thanks, I'm done";
   }
  else if (choice == 2 && answer2 == "Appreciate the hospitality and enter")
   {
    document.getElementById("story").innerHTML = "You realize that the wind pushed the door open and not a friendly ghost or creature of the night. After turning the light on you realize that this is your shed. You turn around and go home" + "<br>repeat?";
    document.getElementById("choice1").innerHTML ="Sure I'll go again";
    document.getElementById("choice2").innerHTML = "No thanks, I'm done";
   }
  else if (choice == 1 && answer1 == "Decide to keep following strange lights")
   {
    document.getElementById("story").innerHTML = "You walk up to a secret fairy party. They are initially afraid but, after seeing that you aren't a threat, invite you to join them. Afterwards you are teleported to your bedroom." + "<br>repeat?";
    document.getElementById("choice1").innerHTML ="Sure I'll go again";
    document.getElementById("choice2").innerHTML = "No thanks, I'm done";
   }
  else if (choice == 2 && answer2 == "Shake head and leave")
   {
    document.getElementById("story").innerHTML = "You decide its too dangerous and walk back to the path. After looking in the direction of the house, you realize its yours and run up to the door as the animals partying on your front lawn run away" + "<br>repeat?";
    document.getElementById("choice1").innerHTML = "Sure I'll go again";
    document.getElementById("choice2").innerHTML = "No thanks, I'm done";
   }
  else if (choice == 1 && answer1 == "Thank them for the kind invitation and follow")
   {
    document.getElementById("story").innerHTML = "You thank them for inviting you and you go to the party afterwards you are teleported back to your room" + "<br>repeat?";
    document.getElementById("choice1").innerHTML ="Sure I'll go again";
    document.getElementById("choice2").innerHTML = "No thanks, I'm done";
   }
  else if (choice == 2 && answer2 == "Thank them for the kind invitation and refuse")
   {
    document.getElementById("story").innerHTML = "You thank them for the invitation but tell them you must go home. They teleport you back to your house, but steal your car as payment." + "<br>repeat?";
    document.getElementById("choice1").innerHTML ="Sure I'll go again";
    document.getElementById("choice2").innerHTML = "No thanks, I'm done";
   }
  else if (choice == 1 && answer1 == "Accept and go with them")
   {
    document.getElementById("story").innerHTML = "You agree to go with them and on the drive into town, the conversation is boring to the point of you fighting to stay awake. You suspect they are an energy vampire. After a while the stranger's car pulls up to a tow truck company. You thank them and you get a tow truck to get your car and take you home" + "<br>repeat?";
    document.getElementById("choice1").innerHTML ="Sure I'll go again";
    document.getElementById("choice2").innerHTML = "No thanks, I'm done";
   }
  else if (choice == 2 && answer2 == "Refuse and return to your car")
   {
    document.getElementById("story").innerHTML = "You refuse their offer and return to your car whiich is surrounded by fairies trying to steal it. You yell at them to stop and they look at you. After a moment they teleport you to your house and steal your car" +"<br>repeat?";
    document.getElementById("choice1").innerHTML ="Sure I'll go again";
    document.getElementById("choice2").innerHTML = "No thanks, I'm done";
   }
  else if (choice == 1 && answer1 == "Sure I'll go again")
   {
    document.getElementById("story").innerHTML = "You are on your way home when your car breaks down in front of a large forest and night is approaching. You can see a house's lights on in the distance.";
    document.getElementById("choice1").innerHTML ="stay near your car";
    document.getElementById("choice2").innerHTML = "enter forest";
   }
  else if (choice == 2 && answer2 == "No thanks, I'm done")
   {
    document.getElementById("story").innerHTML = "Thanks for reading!";
   }
 }