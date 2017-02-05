var caption = "Computer Science student from UC Irvine. "
var captionLength = 0;

// cache reference to window and animation items
var $animationLeft = $('.animation-left');
var $animationRight = $('.animation-right');
var $window = $(window);


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    setTimeout( type, 2000);
    $window.on('scroll resize', check_if_left_in_view);
    $window.on('scroll resize', check_if_right_in_view);
  
});  // end document ready

// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

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
      $('.skills-list li').css('opacity', '1');
      $('.featurette').css('opacity', '1');
      $element.addClass('animated fadeInLeft');
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
      $('.featurette').css('opacity', '1');
      $element.addClass('animated fadeInRight');
    }
  });
}  // end check_if_quotes_in_view

// Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
