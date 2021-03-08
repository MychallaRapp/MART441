var pugSelecter = "#pug";
var allPugs = new Array();
class PugInfo
{
  construtor(selector,imagePath)
  {
    this.selector = selector;
    this.imagePath = imagePath;
  }
  get theSelector()
  {
    return this.selector;
  }
  get theImagePath()
  {
    return this.imagePath;
  }
  toString()
  {
    return this.selector + ":" + this.imagePath;
  }
}
function initializeArray()
{
  var pug = new PugInfo("#pug","images/Revan_sleeping.JPG");
  allPugs.push(pug);
}
$(document).ready(function()
{
  initializeArray();
  console.log(allPugs.length);
  console.log(allPugs[0].toString());
  console.log(allPugs[0].theSelector);
  console.log(allPugs[0].theImagePath);
  $(allPugs[0].theSelector).attr("src",allPugs[0].theImagePath);
  $("button").click(function()
  {
    $(".stuff").fadeOut();
    $("#third").toggle();
      setInterval(moveCircle, 1000);
    $(allPugs[0].theSelector).fadeOut().fadeIn();
  })
})
function moveCircle()
{
  $("#circle").animate({left: 250}).animate({top: 400}).animate({left: 0}).animate({top: 300});
}
