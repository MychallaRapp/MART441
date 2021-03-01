var myViewArray = new Array();

class ViewFinder
{
  constructor(title,author,description,year)
  {
    this.title = title;
    this.author = author;
    this.description = description;
    this.year = year;
    var ViewFinder = ["images/Mugsy_sleeping.jpg","images/Revan_sleeping.jpg",];
  }

  toString()
  {
    return "Title: " + this.title;
  }
  get theTitle()
  {
    return this.title;
  }
  get theAuthor()
  {
    return this.author;
  }
  get theDescription()
  {
    return this.description;
  }
  get theYear()
  {
    return this.year;
  }
  get theImage()
  {
    return ViewFinder = ["images/Mugsy_sleeping.jpg","images/Revan_sleeping.jpg",];
  }
}
function initializeArray()
{
  var myViewFinder = new ViewFinder("Revan Sleeping");
  var myViewFinder1 = new ViewFinder("Mugsy sleeping");
  var myViewFinder2 = new ViewFinder("My dog sleeping despite doing no exercises.");
  var myViewFinder3 = new ViewFinder("Mychalla Rapp");
  var myViewFinder4 = new ViewFinder("6/20/2020");
  var myViewFinder5 = new ViewFinder("My Mom's dog being very happy on the couch.");
  var myViewFinder6 = new ViewFinder("Mychalla Rapp");
  var myViewFinder7 = new ViewFinder("10/21/2019");
  myViewArray.push(myViewFinder);
  myViewArray.push(myViewFinder1);
  myViewArray.push(myViewFinder2);
  myViewArray.push(myViewFinder3);
  myViewArray.push(myViewFinder4);
  myViewArray.push(myViewFinder5);
  myViewArray.push(myViewFinder6);
  myViewArray.push(myViewFinder7);
  myViewArray.push(ViewFinder);

}
function accessInformation()
{
  var randomNumber = Math.floor(Math.random() * myViewArray.length);
  document.getElementById("title").innerHTML = myViewArray[randomNumber].toString();

}
