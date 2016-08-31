var caption = "Computer Science student from University of California Irvine. "
var captionLength = 0;

$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    button = $('#toggle-menu');
    type();
  
  $('#toggle-menu').click(function() {
    
    $('.menu').animate({
      right: "0px"
    }, 200);

    $('body').animate({
      right: "75px"
    }, 100);
    
  });  // end open menu

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-285px"
    }, 200);

    $('body').animate({
      right: "0px"
    }, 200);
  });  //end close menu
  
});  // end document ready

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
