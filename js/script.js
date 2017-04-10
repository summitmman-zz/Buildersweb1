
var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
  // Menu
  if($(window).width() > 768) {
    $('#menu').css("display","block");
    $('#menu > ul').animate({opacity: 1});
    $('#nav-bg').css("height","50px");
    $('body').css('overflow-y','auto');
  } else {
    $('#menu').css("display","none");
    $('#menu > ul').animate({opacity: 0});
    $('#nav-bg').css("height","50px");
    $('#menu-closed').removeClass('hide');
    $('#menu-open').addClass('hide');
    $('body').css('overflow-y','auto');
    menuClick(false);
  }
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

var myCarousel;
var range = 200;

$(window).on('scroll', function () {
  
    var scrollTop = $(this).scrollTop();
    var offset = myCarousel.offset().top;
    var height = myCarousel.outerHeight();
    offset = offset + height / 2;
    var calc = 1 - (scrollTop - offset + range) / range;
  
    myCarousel.css({ 'opacity': calc });
  
    if ( calc > '1' ) {
      myCarousel.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      myCarousel.css({ 'opacity': 0 });
    }

    $('.section').each(function() {
        var target = $(this).offset().top;
		console.log(target, scrollTop);
        var id = $(this).attr('id');
		console.log(id);

        if (scrollTop + 50 >= target) {
            $('#menu > ul > li > a').removeClass('menu-active');
            $('#menu > ul > li > a[href="#' + id + '"]').addClass('menu-active');
        }
    });
    // parallax();
});

// var jumboHeight;
// function parallax(){
//     console.log(jumboHeight);
//     var scrolled = $(window).scrollTop();
//     $('.content-one-block').css('height', (jumboHeight-scrolled) + 'px');
// }

/* In animations (to close icon) */

	var beginAC = 80,
	    endAC = 320,
	    beginB = 80,
	    endB = 320;
  var pathD,
		pathE,
		pathF,
		segmentD,
		segmentE,
		segmentF,
		wrapper2,
		trigger2,
		toCloseIcon2;

	function inAC(s) {
	    s.draw('80% - 240', '80%', 0.3, {
	        delay: 0.1,
	        callback: function() {
	            inAC2(s)
	        }
	    });
	}

	function inAC2(s) {
	    s.draw('100% - 545', '100% - 305', 0.6, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function inB(s) {
	    s.draw(beginB - 60, endB + 60, 0.1, {
	        callback: function() {
	            inB2(s)
	        }
	    });
	}

	function inB2(s) {
	    s.draw(beginB + 120, endB - 120, 0.3, {
	        easing: ease.ease('bounce-out', 1, 0.3)
	    });
	}

	/* Out animations (to burger icon) */

	function outAC(s) {
	    s.draw('90% - 240', '90%', 0.1, {
	        easing: ease.ease('elastic-in', 1, 0.3),
	        callback: function() {
	            outAC2(s)
	        }
	    });
	}

	function outAC2(s) {
	    s.draw('20% - 240', '20%', 0.3, {
	        callback: function() {
	            outAC3(s)
	        }
	    });
	}

	function outAC3(s) {
	    s.draw(beginAC, endAC, 0.7, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function outB(s) {
	    s.draw(beginB, endB, 0.7, {
	        delay: 0.1,
	        easing: ease.ease('elastic-out', 2, 0.4)
	    });
	}

	/* Scale functions */

	function addScale(m) {
		m.className = 'menu-icon-wrapper scaled';
	}

	function removeScale(m) {
		m.className = 'menu-icon-wrapper';
	}

  function menuClick(overrideToCloseIcon2 = null) {

    if(overrideToCloseIcon2 == true || overrideToCloseIcon2 == false) {
      toCloseIcon2 = overrideToCloseIcon2;
    }
    
		addScale(wrapper2);
		if (toCloseIcon2) {
			inAC(segmentD);
			inB(segmentE);
			inAC(segmentF);

			// dummy2.className = 'dummy dummy--active';
		} else {
			outAC(segmentD);
			outB(segmentE);
			outAC(segmentF);

			// dummy2.className = 'dummy';
		}
		toCloseIcon2 = !toCloseIcon2;
		setTimeout(function() {
			removeScale(wrapper2)
		}, 450);
	};
// DOCUMENT READY
$(document).ready(function() {
  console.log('ready');
  myCarousel = $('#myCarousel');
  jumboHeight = $('.content-space-one').outerHeight();
  
  // Menu toggle
  $('#menu-icon').click(function(){
    if($('#menu').css("display") == 'none') {
      $('#menu').css("display","block");
      // $('#menu > ul').animate({'margin-top': '0px'});
      $('#menu > ul').animate({opacity: 1});
      $('#nav-bg').css("height","100%");
      $('#menu-closed').addClass('hide');
      $('#menu-open').removeClass('hide');
      $('body').css('overflow-y', 'hidden');
    } else {
      $('#menu').css("display","none");
      $('#menu > ul').animate({opacity: 0});
      $('#nav-bg').css("height","50px");
      $('#menu-closed').removeClass('hide');
      $('#menu-open').addClass('hide');
      $('body').css('overflow-y','auto');
    }
  });

// smooth scrolling
   $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	/* Awesome burger scaled */

	pathD = document.getElementById('pathD'),
		pathE = document.getElementById('pathE'),
		pathF = document.getElementById('pathF'),
		segmentD = new Segment(pathD, beginAC, endAC),
		segmentE = new Segment(pathE, beginB, endB),
		segmentF = new Segment(pathF, beginAC, endAC),
		wrapper2 = document.getElementById('menu-icon-wrapper2'),
		trigger2 = document.getElementById('menu-icon-trigger2'),
		toCloseIcon2 = true;
		// dummy2 = document.getElementById('dummy2');

	wrapper2.style.visibility = 'visible';

	trigger2.onclick = menuClick;
  
});