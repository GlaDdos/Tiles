$(document).ready(function(){
  // toggle top menu
  $('.hamburger-menu').on('click', function(){
    $('.horizontal-menu').animate({
      width: 'toggle'
    });
  });


  $('.menu-item').on('click', function () {

    if($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $('.menu-item').removeClass('active');
      $(this).addClass('active');
    }

    if(this.id == 'blog') {
      $('.sub-menu').show();
    } else {
      $('.sub-menu').hide();
    }
  });

})