var images = [
  {url:"http://1.bp.blogspot.com/-PCjKh0ldpUU/UrMzi3uMOpI/AAAAAAAACjI/2VxOmXdhTSY/s1600/8097974222_043436e208_o.jpg", type:"dog"},
  {url:"http://www.petsandparasites.org/images/uploads/images/Mixed_Breed_Puppy_Four_Months.jpg", type:"dog"},
  {url:"http://upload.wikimedia.org/wikipedia/commons/2/22/Turkish_Van_Cat.jpg", type:"cat"},
  {url:"http://i4.mirror.co.uk/incoming/article2106793.ece/alternates/s2197/Fluffy-White-dog.jpg", type:"dog"}
];

var index = 0;
var correctAnswers = 0;

$(function(){
  populateFirstImage();
  $("#dog").click(dogYes);
  $("#cat").click(catYes);
});

var populateFirstImage = function() {
  $("#image").attr("src", images[index].url);
}

var dogYes = function() {
  if ( images[index].type === "dog" ){
    correctAnswers++;
    $("#counter").text("Correct Answers: " + correctAnswers);
    nextImage();
  } else {
    nextImage();
  }
  //get a result object HTML page, calls .text method to change the text
  //("#result").text("Yes");
  //$("#result").text("No");
};

var catYes = function() {
  if ( images[index].type === "cat" ){
    correctAnswers++;
    $("#counter").text("Correct Answers: " + correctAnswers);
    nextImage();
  } else if ( images[index].type === "dog" ){
    nextImage();
  }
};

var nextImage = function() {
  if( (index+1) < images.length ){
    index++;
    $("#image").attr("src", images[index].url);
  }
};
