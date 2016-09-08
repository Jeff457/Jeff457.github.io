var caption = "Computer Science student from University of California Irvine. "
var captionLength = 0;

// cache reference to window and animation items
var $animationLeft = $('.animation-left');
var $animationRight = $('.animation-right');
var $window = $(window);


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    button = $('#toggle-menu');
    setTimeout( type, 2000);
    $window.on('scroll resize', check_if_left_in_view);
    $window.on('scroll resize', check_if_right_in_view);
    $window.trigger('scroll');
  
  // function animates the menu
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

// function to animate introduction text
function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}  // end type

// function to animate cursor in introduction text
function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}  // end cursorAnimation

function check_if_left_in_view() {
  var windowHeight = $window.height();
  var windowTopPosition = $window.scrollTop();
  var windowBottomPosition = (windowTopPosition + windowHeight);
  
  $.each($animationLeft, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);
    
    //check to see if this current container is within viewport
    if ( (elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition) ) {
      $element.addClass('animated fadeInLeft');
    }
    else {
      $element.removeClass('animated fadeInLeft');
    }
  });
}  // end check_if_skills_in_view

function check_if_right_in_view() {
  var windowHeight = $window.height();
  var windowTopPosition = $window.scrollTop();
  var windowBottomPosition = (windowTopPosition + windowHeight);
  
  $.each($animationRight, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);
    
    //check to see if this current container is within viewport
    if ( (elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition) ) {
      $element.addClass('animated fadeInRight');
    }
    else {
      $element.removeClass('animated fadeInRight');
    }
  });
}  // end check_if_quotes_in_view
