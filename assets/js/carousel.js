(function(app) { 
	'use strict'; 
	
    var Carousel = function() {};
    
	Carousel.prototype.init = function() {
        var _self = this;
        _self.loremMomentumCarousel();
        _self.artistCarousel();
    };
    

    app.Carousel = Carousel;

    Carousel.prototype.loremMomentumCarousel = function() {
        // added delay to initialize carousel first
        setTimeout(function(){
            if($(".product-image-carousel .owl-dots").length > 0 ){
                console.log("found")
                $(".product-image-carousel .owl-dots").removeClass("disabled")
            }
        },200)
        $(".product-image-carousel").owlCarousel({
            loop:true,
            margin:10,
            items: 1,
            
        })
    }

    Carousel.prototype.artistCarousel = function(){
        // added delay to initialize carousel first
        setTimeout(function(){
            if($(".product-image-carousel .owl-dots").length > 0 ){
                console.log("found")
                $(".product-image-carousel .owl-dots").removeClass("disabled")
            }
        },200)
        $(".artist-carousel-wrapper").owlCarousel({
            loop:true,
            margin:10,
            items: 3,
            responsive:{
                0:{
                    items:1,
                    
                },
                600:{
                    items:3,
                   
                }
            }
        })
    }




    app.ready(function () {
        Carousel.prototype.init()
    })

})(window.app);