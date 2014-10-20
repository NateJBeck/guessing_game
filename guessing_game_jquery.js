var images = [
  "http://1.bp.blogspot.com/-PCjKh0ldpUU/UrMzi3uMOpI/AAAAAAAACjI/2VxOmXdhTSY/s1600/8097974222_043436e208_o.jpg",
  "http://www.petsandparasites.org/images/uploads/images/Mixed_Breed_Puppy_Four_Months.jpg"
];
index = 0;

$(function(){
  $("#dog").click(sayYes);
  $("#cat").click(sayNo);
  $("#next").click(nextImage);
});

function sayYes() {
  $("#result").text("Yes")
  //get a result object HTML page, calls .text method to change the text
};

function sayNo() {
  $("#result").text("No")
};

function nextImage() {
  $("#image").attr("src", images[index]);
  index++;
};

