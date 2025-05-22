$(function(){
  var $slider = $('.men');
  var sizeImage = 200;
  var items = $slider.children().length;
  var itemswidth = (items * sizeImage); // 140px width for each client item 
  $slider.css('width',itemswidth);
  
  var rotating = true;
  var sliderspeed = 0;
  var seeitems = setInterval(rotateSlider, sliderspeed);
  
  $(document).on({
    mouseenter: function(){
      rotating = false; // turn off rotation when hovering
    },
    mouseleave: function(){
      rotating = true;
    }
  }, '.showcase');
  
  function rotateSlider() {
    if(rotating != false) {
      var $first = $('.men .tititit:first');
      $first.animate({ 'margin-left': '-'+sizeImage+'px' }, 3000, "linear", function() {
        $first.remove().css({ 'margin-left': '0px' });
        $('.men .tititit:last').after($first);
      });
    }else{
      $first.stop();
    }
  }
});




new Mmenu(document.querySelector("#menu"));

            document.addEventListener("click", function (evnt) {
                var anchor = evnt.target.closest('a[href="#/"]');
                if (anchor) {
                    alert("Thank you for clicking, but that's a demo link.");
                    evnt.preventDefault();
                }
            });