$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut("slow"); //600ms
  // $(".red-box").fadeOut("fast"); //100ms
  // $(".red-box").fadeOut(); //default value - 400ms
  //$(".red-box").fadeOut(2000); //2 s
  //$(".green-box").fadeOut(2000); //2 s
  
  //fadeIn the red box and green box again
  //$(".red-box").fadeIn(2000);
  //$(".green-box").fadeIn(2000);

  // Fade element to specific opacity (here 50%)
  $(".blue-box").fadeTo(1000,0.6);

  // $(".red-box").fadeTo(2000,0.2);
  // $(".green-box").fadeTo(2000,0.5); 
  // $(".blue-box").fadeTo(2000,0.8);

  // Note that the blue box animation starts right away, whereas the second
  // red box animation waits until the first animation finished.
  // This is because each element has its own animation queue which is
  // executed one after the other. So while the red box is still "busy" with
  // its first animation, the second animation waits in the queue.
  $(".blue-box").fadeToggle();
  $(".blue-box").fadeToggle();
  $(".blue-box").fadeToggle();
  // Notice that fadeToggle fades back to the blue box's previous opacity,
  // thus only back to 50% opacity.
});