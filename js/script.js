$(document).ready(function(){
  /*onescroll();*/ //Enable smooth scroll
  $('.parallax').parallax();  //initialize parallax
  $('select').material_select(); //initialize dropdown

/*---Subject for email---*/
  var $sub = $("#_subject");
  $("#name").on("input", function() {
    $sub.val($(this).val() + " " + "[" + "Pikzl Contact Form" + "]");
  });

/*---nav height---*/
  var navheight = $('nav').height();
  $('#top-parallax').css('padding-top', navheight+'px');
  $('.page-head').css('padding-top', navheight+'px');
  $('#home, #about, #testimonials, #contact').css('padding-bottom', navheight+'px');
});

/*---next anchor on click---*/
// $(".next").click(function() {
//   var topPart = $(window).height() - $(window).height()/100*10;
//   var a= document.getElementsByTagName('anchor');
//   for(var i = 0 ; i < a.length ; i++) {
//     var t = a[i].getClientRects()[0].top;
//     if(t >= 40){
//         foundAnchor = true;
//      break;
//     }
//   }
//   if(foundAnchor){
//       $('html,body').stop().animate({
//         scrollTop: a[i].offsetTop
//       },1000);
//   }
// });

/*--Scroll to top on click--*/
$(".top").click(function() {
  $('html, body').stop().animate({scrollTop : 0},1000);
});


/*---scroll on click---*/
$('a[href^="#"]').on('click', function (e) {
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




  /*---Stop scroll to next anchor while in about page---*/

  // $("#about").mouseover(function(){
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
