$(function () {

  // While hover() with one callback function triggers both when entering and
  // leaving the element with the cursor, mouseenter() and mouseleave() allow
  // you to attach different event handlers for both.
  $(".blue-box").mouseenter(function() {
    $(this).stop().fadeTo(500, 0.5);
  });

  $(".blue-box").mouseleave(function() {
    $(this).stop().fadeTo(500, 1);
  });

  $(".blue-box")
});