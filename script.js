$(document).ready(function(){

  $('#menu__button').click(function(){
    $('.container__menu').css({'left': 0, "opacity": 100});
    $('#close__button').css("opacity", 100);

  
  });
  $('#close__button').click(function(){
    $('.container__menu').css({'left': '100vw', "opacity": 0});
  });
  });
