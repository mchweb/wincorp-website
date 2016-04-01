/* Ajax loading script */

$( document ).ajaxStart(function() {
   $( "#form-button" ).fadeOut( "fast", function() {
    $( "#form-loader" ).fadeIn("fast");
  });

});
$( document ).ajaxStop(function() {
  $( "#form-loader" ).fadeOut( "fast", function() {
    $( "#form-success" ).fadeIn("fast");
  });
});

/* Updown */

  $(function () { 
$(document).ready(updownResize);
$(window).resize(updownResize);
});
  function updownResize(){
  $( "#updown" ).width(($( window ).width() - 1280)/2);
  }
    var updownElem = document.getElementById('updown');

    var pageYLabel = 0;

    updownElem.onclick = function() {
      var pageY = window.pageYOffset || document.documentElement.scrollTop;
	  	  
      switch (this.className) {
        case 'up':
          pageYLabel = pageY;
          window.scrollTo(0, 0);
          this.className = 'down';
          break;

        case 'down':
          window.scrollTo(0, pageYLabel);
          this.className = 'up';
      }

    }

    window.onscroll = function() {
      var pageY = window.pageYOffset || document.documentElement.scrollTop;
      var innerHeight = document.documentElement.clientHeight;
	  
      switch (updownElem.className) {
        case '':
          if (pageY < innerHeight) {
            updownElem.className = 'up';
          }
          break;

        case 'up':
          if (pageY == 0) {
            updownElem.className = '';
          }
          break;

        case 'down':
            if (pageY != 0){ updownElem.className = 'up';
			pageYLabel = 0;
			}
          break;

      }
    }