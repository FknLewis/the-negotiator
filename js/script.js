$(document).ready(function(){
  $('.slider').slider({full_width: true, height: "370px"});
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

 //  var options = [ <!-- Scroll Fire -->
 //    {selector: '#about-us', offset: 0, callback: function(el) {
 //      Materialize.fadeInImage($(el));
 //    } },
 //    {selector: '#lewis', offset: 300, callback: function(el) {
 //      Materialize.fadeInImage($(el));
 //    } },
 //    {selector: '#ross', offset: 300, callback: function(el) {
 //      Materialize.fadeInImage($(el));
 //    } },
 //    {selector: '#lewis-head', offset: 200, callback: function(el) {
 //      Materialize.fadeInImage($(el));
 //    } },
 //    {selector: '#lewis-text', offset: 0, callback: function(el) {
 //      Materialize.fadeInImage($(el));
 //    } },
 //    {selector: '#ross-head', offset: 200, callback: function(el) {
 //      Materialize.fadeInImage($(el));
 //    } },
 //    {selector: '#ross-text', offset: 0, callback: function(el) {
 //      Materialize.fadeInImage($(el));
 //    } }
 // ];
 // Materialize.scrollFire(options);

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
      //  window.history.pushState(null,null, '#top')
      //  $(document).on("scroll", onScroll);
    }
    else{
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 1000, 'swing', function () {
          // window.location.hash = target;
          // $(document).on("scroll", onScroll);
      });
    }
});

// function onScroll(event){       //change url while scrolling
//     var scrollPos = $(document).scrollTop();
//     $('nav a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         var location = $(this).attr('href');
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             window.history.pushState(null,null, location);
//             var url = window.location.href;
//         }
//     });
// }

// $(window).resize(function(){
//   if ( $(window).width() > 992) {
//     $('nav').addClass('transparent');
//   }
//   else if ($(window).width() < 992){
//     $('nav').removeClass('transparent');
//   }
// })
if ( $(window).width() > 992) {
  //$('nav').addClass('transparent');
  (function() { //scroll to next anchor
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
  })();
}
