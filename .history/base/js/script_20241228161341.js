$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut("slow"); //600ms
  // $(".red-box").fadeOut("fast"); //100ms
  // $(".red-box").fadeOut(); //default value - 400ms
  $(".red-box").fadeOut(2000); //2 s
  $(".green-box").fadeOut(2000); //2 s
  //fadeIn the red box and green box again
  $(".red-box").fadeIn(2000);
  $(".green-box").fadeIn(2000);

  // Fade element to specific opacity (here 50%)
  $(".blue-box").fadeTo(2000);
});