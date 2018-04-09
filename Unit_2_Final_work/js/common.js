$('document').ready(function() {
	console.log($('.pictures').isotope)
	// $('.pictures').isotope({
	// 	percentPosition: true,
	// 	itemSelector: '.pictures-item',
	// 	layoutMode: 'masonry',
	// 	masonry: {
 //    		columnWidth: 24,
 //    		gutter: 0
 // 		 }
	// });
	// 47.856446, 35.094205
	function initMap() {
        var uluru = {lat: 47.856446, lng: 35.094205};
        var map = new google.maps.Map($('#map')[0], {
          zoom: 17,
          center: uluru
        });
        // var marker = new google.maps.Marker({
        //   position: uluru,
        //   map: map
        // });
      }

    initMap();

	$('.carosl_first').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true
	});
	$('.carosl_second').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		speed: 800,
		cssEase: 'ease',
		arrows: false,
	})
})