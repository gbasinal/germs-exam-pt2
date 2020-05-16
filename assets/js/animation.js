(function(app) { 
	'use strict'; 
	
	var Animation = function() {};
  
	Animation.prototype.init = function() {
        Animation.prototype.inView();
	};

    Animation.prototype.inView = function() {
        $('.animated').one('inview', function(event, isInView, ) {
            var _this = $(this);
            var animatedChildren = _this.find('.animated-child');
            var animatedImage = _this.find(".animated-image");
            var animatedHeader = _this.find(".animated-header");
            if(isInView){
                if(animatedChildren.length > 0) {
                    TweenMax.staggerTo(animatedChildren, 0.4, { y: 0, opacity: 1, delay: 0.5}, 0.2)
                }
                if(animatedImage.length > 0) {
                    TweenMax.staggerTo(animatedImage, 0.8, { opacity: 1, delay: 0.5}, 0.2)
                }
                if(animatedHeader.length > 0) {
                    TweenMax.staggerTo(animatedHeader, 0.4, { width: "100%", delay: 0.5}, 0.2)
                }

               
                  

            
            }
        });


    }

    Animation.prototype.sectionElementReveal = function(anim, animatedTxt){

        TweenMax.staggerTo(anim, 0.4, { opacity: 1, delay: 0.4}, 0.2)
        setTimeout(function(){
            TweenMax.staggerTo(animatedTxt, 0.4, { y: 0, opacity: 1, delay: 0.1}, 0.2)
        },2000)

        ;
    }




    app.Animation = Animation;

    app.ready(function () {
        console.log('Animation Ready');
        Animation.prototype.init()
    })

    app.onLoad(function(){
        console.log('Animation Load');
        
    })


})(window.app);