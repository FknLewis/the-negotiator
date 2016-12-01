$(document).ready(function(){
  //onescroll();
  $('.parallax').parallax();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
    }
    else {
    }
  });

  var $sub = $("#_subject"); //subject for email
  $("#name").on("input", function() {
    $sub.val($(this).val() + " " + "[" + "Pikzl Contact Form" + "]");
  });

});

$(".next").click(function() { //next anchor on click
  var topPart = $(window).height() - $(window).height()/100*10;
  var a= document.getElementsByTagName('anchor');
  for(var i = 0 ; i < a.length ; i++) {
    var t = a[i].getClientRects()[0].top;
    if(t >= 40){
        foundAnchor = true;
     break;
    }
  }
  if(foundAnchor){
      $('html,body').stop().animate({
        scrollTop: a[i].offsetTop
      },1000);
  }
});

$(".top").click(function() {
  $('html, body').stop().animate({scrollTop : 0},1000);
});



$('a[href^="#"]').on('click', function (e) { //scroll on click
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
    $target = $(target);
    if($target.selector == "#top"){
       $('html, body').stop().animate({scrollTop : 0},1000);
    }
    else{
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 1000, 'swing', function () {
      });
    }
  });





  // $("#about").mouseover(function(){ //Stop scroll to next anchor while in about page
  //   $(document).unbind('mousewheel DOMMouseScroll');
  // });
  // $("#about").mouseout(function(){
  //   $(document).bind('mousewheel DOMMouseScroll', onescroll());
  // });

function onescroll(){ //scroll to next anchor
  var delay = false;
  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;
    delay = true;
    setTimeout(function(){delay = false},200)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
    var a= document.getElementsByTagName('anchor');
    var foundAnchor = false;
    if(wd < 0) {
      for(var i = 0 ; i < a.length ; i++) {
        var t = a[i].getClientRects()[0].top;
        if(t >= 40){
            foundAnchor = true;
         break;
        }
      }
    }
    else {
      for(var i = a.length-1 ; i >= 0 ; i--) {
        var t = a[i].getClientRects()[0].top;
        if(t < -20) {
            foundAnchor = true;
            break;
        }
      }
    }
    if(foundAnchor){
      $('html,body').stop().animate({
        scrollTop: a[i].offsetTop
      },1000);
    }
  });
}
