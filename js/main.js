
/* --- Nav-Bar scoll animation ---*/
var $displayHight = 100;

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > $displayHight);
	$('a').toggleClass('scrolled', $(this).scrollTop() > $displayHight);
})


    /* =========================================
     * filter
     *  =======================================*/

	let mainNavLinks = document.querySelectorAll("nav ul li a");
	let mainSections = document.querySelectorAll("main section");
	
	let lastId;
	let cur = [];
	
	// This should probably be throttled.
	// Especially because it triggers during smooth scrolling.
	// https://lodash.com/docs/4.17.10#throttle
	// You could do like...
	// window.addEventListener("scroll", () => {
	//    _.throttle(doThatStuff, 100);
	// });
	// Only not doing it here to keep this Pen dependency-free.
	
	window.addEventListener("scroll", event => {
	  let fromTop = window.scrollY;
	
	  mainNavLinks.forEach(link => {
		let section = document.querySelector(link.hash);
	
		if (
		  section.offsetTop <= fromTop &&
		  section.offsetTop + section.offsetHeight > fromTop
		) {
		  link.classList.add("active");
		} else {
		  link.classList.remove("active");
		}
	  });
	});

	var TxtType = function (el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	  };
  
	  TxtType.prototype.tick = function () {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];
  
		if (this.isDeleting) {
		  this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
		  this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
  
		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  
		var that = this;
		var delta = 200 - Math.random() * 100;
  
		if (this.isDeleting) { delta /= 2; }
  
		if (!this.isDeleting && this.txt === fullTxt) {
		  delta = this.period;
		  this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
		  this.isDeleting = false;
		  this.loopNum++;
		  delta = 500;
		}
  
		setTimeout(function () {
		  that.tick();
		}, delta);
	  };
  
	  window.onload = function () {
		var elements = document.getElementsByClassName('typewrite');
		for (var i = 0; i < elements.length; i++) {
		  var toRotate = elements[i].getAttribute('data-type');
		  var period = elements[i].getAttribute('data-period');
		  if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		  }
		}
	  };

	  $(document).ready(function() {
		$("#cv-pic").fancybox({
			  helpers: {
				  title : {
					  type : 'float'
				  }
			  }
		  });
	});

	$(document).ready(function(){
		$('.customer-logos').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1500,
			arrows: false,
			dots: false,
			pauseOnHover: false,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 3
				}
			}]
		});
	});

/* =========================================
     * filter
     *  =======================================*/

    $('#filter a').click(function (e) {
        e.preventDefault();

        $('#project #filter li').removeClass('active');
        $(this).parent('li').addClass('active');

        var categoryToFilter = $(this).attr('data-filter');

        $('.project-item').each(function () {

            if ($(this).data('category') === categoryToFilter || categoryToFilter === 'all') {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

    });

	  // Initialize and add the map
	  function initMap() {
		// The location of Uluru
		var uluru = {lat: 48.847287, lng: 9.151507};
		// The map, centered at Uluru
		var map = new google.maps.Map(
			document.getElementById('map'), {zoom: 10, center: uluru});
		// The marker, positioned at Uluru
		var marker = new google.maps.Marker({position: uluru, map: map});
	  }
