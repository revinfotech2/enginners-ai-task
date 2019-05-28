
function resize() {
    var heights = window.innerHeight;
    document.getElementById("firstPage").style.height  = heights + "px";
    document.getElementById("secondPage").style.height  = heights + "px";
    document.getElementById("thirdPage").style.height  = heights + "px";
}

window.onload = function () {
    resize();
};


$("#firstPageBottomBtn").click(function() {
    $('html,body').animate({
       scrollTop: $("#secondPage").offset().top},
       'slow');
});

 var currentLocation = 'firstPage';
 var autoScroll = false;
    $(document).scroll(function(e){
   var currScroll = $(this).scrollTop();
   var firstPage = $("#firstPage").offset().top;
   var secondPage = $("#secondPage").offset().top;
   var thirdPage = $("#thirdPage").offset().top;
   if(!autoScroll){
     if(currScroll > 1 && currentLocation == 'firstPage'){
     scrollToGrid(secondPage, 'secondPage');
   } else if(currScroll > secondPage + 1 && currentLocation == 'secondPage'){
     scrollToGrid(thirdPage, 'thirdPage');
   } else if(currScroll < thirdPage && currentLocation == 'thirdPage'){
       scrollToGrid(secondPage, 'secondPage'); 
   } else if(currScroll < secondPage && currentLocation == 'secondPage'){
     scrollToGrid(firstPage, 'firstPage'); 
   }
   }
   
   function scrollToGrid(gridName, page){
     currentLocation = page;
     autoScroll = true;
     $('html,body').animate({
       scrollTop: gridName},
       'slow', function(){autoScroll = false;});
   }
 });


 $(".aero").click(function() {
  $('html,body').animate({
      scrollTop: $("#secondPage").offset().top},
      'slow');
});