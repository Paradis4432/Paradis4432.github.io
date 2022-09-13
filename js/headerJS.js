var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $("header").addClass("headerHide")
   } else {
      // upscroll code
      $("header").removeClass("headerHide")
   }
   lastScrollTop = st;
});