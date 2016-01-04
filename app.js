var main = function() {
  $('.flappy-project').click(function() {
    $('.project-detail').children().hide();
     $('.flappy-project-detail').animate({
      'marginLeft': "-800px"
    });
    $('.flappy-project-detail').show(0);
 $('.flappy-project-detail').addClass('animated fadeInDown');
  });
    
    $('.calculator-project').click(function() {
      $('.project-detail').children().hide();
      $('.calculator-project-detail').animate({
        'marginLeft': "0px"
      });
      $('.calculator-project-detail').show(0);
      $('.calculator-project-detail').addClass('animated fadeInDown');
    });
  
  $('.text-project').click(function() {
    $('.project-detail').children().hide();
    $('.text-project-detail').animate({
      'marginLeft': "800px"
    });
    $('.text-project-detail').show(0);
    $('.text-project-detail').addClass('animated fadeInDown');
  });
    
    $('.project-detail').click(function() {
       $('.project-detail').children().delay(500).hide(0);
    });
};

$(document).ready(main);
