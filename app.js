var main = function() {
  $('.project').click(function() {
 $('.project-detail').animate({
    left: "-100"
 }, 500);
    $('body').animate({
  left: "285"
}, 500);
    
    $('body').click(function() {
      $('.project-detail').animate({
        left: "-285"
      }, 500);
      $('body').animate({
        left: "0"
      }, 500);
    })
});
};

$(document).ready(main);