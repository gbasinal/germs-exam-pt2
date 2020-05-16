(function(app) { 
	'use strict'; 
	
    var Carousel = function() {};
    
	Carousel.prototype.init = function() {
        var _self = this;
        _self.loremMomentumCarousel();
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




    app.ready(function () {
        Carousel.prototype.init()
    })

})(window.app);