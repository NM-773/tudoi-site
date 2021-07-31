$(function(){

  $('header a').click(function(){
  var id=$(this).attr('href');
  var positon=$(id).offset().top;
  $('html,body').animate({
   "scrollTop":positon
  },500);
  });

});

