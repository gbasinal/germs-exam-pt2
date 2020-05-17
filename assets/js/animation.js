(function(app) { 
	'use strict'; 
	
	var Animation = function() {};
  
	Animation.prototype.init = function() {
        Animation.prototype.inView();
        Animation.prototype.sectionElementReveal();
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

        var animCollider = $(".animation-collider");
        var animColliderRedeem = $(".animation-collider-redeem");
        var momentum = $("#lorem-momentum");
        var three = $(".product-momentum-container")
        var artist = $("#the-artist .section-header-container")
        var dragon = $("#dragon")
        var redeem = $("#redeem .section-header-container")


        var animM = momentum.find(".animated-img");
        var animatedTxtM =  momentum.find(".animated-text");

        var animT = three.find(".animated-img");
        var animatedTxtT =  three.find(".animated-text");

        var animA = $(".two-col-container .animated-img");
        var animatedTxtA =  $(".two-col-container .animated-text");

        var animC = $(".artist-carousel-container .animated-img");
   
        var animD = $("#dragon .animated-img");
        var animatedTxtD =  $("#dragon .animated-text");

        var animR = $("#redeem  .animated-img");
        var animatedTxtR =  $("#redeem  .animated-text");

        $(window).on("scroll", function(){
            if(app.Menu.prototype.collider(momentum, animCollider)){
            
                TweenMax.staggerTo(animM, 0.8, { opacity: 1, delay: 0.5}, 0.2)
                setTimeout(function(){
                    TweenMax.staggerTo(animatedTxtM, 0.4, { y: 0, opacity: 1, delay: 0.1}, 0.2)
                },2000)
            }
            if(app.Menu.prototype.collider(three, animCollider)){
                
                TweenMax.staggerTo(animT, 0.8, { opacity: 1, delay: 0.5}, 0.2)
                setTimeout(function(){
                    TweenMax.staggerTo(animatedTxtT, 0.4, { y: 0, opacity: 1, delay: 0.1}, 0.2)
                },1500)
            }

            if(app.Menu.prototype.collider(artist, animCollider)){
                
                TweenMax.staggerTo(animA, 0.8, { opacity: 1, delay: 0.5}, 0.2)
                setTimeout(function(){
                    TweenMax.staggerTo(animatedTxtA, 0.4, { y: 0, opacity: 1, delay: 0.1}, 0.2)
                    TweenMax.staggerTo(animC, 0.8, { opacity: 1, delay: 0.5}, 0.2)
                },800)
            }

            
            if(app.Menu.prototype.collider(dragon, animCollider)){
                TweenMax.staggerTo(animatedTxtD, 0.4, { y: 0, opacity: 1, delay: 0.1}, 0.2)
                TweenMax.staggerTo(animD, 0.8, { opacity: 1, delay: 0.5}, 0.2)
                setTimeout(function(){
                    
                },1500)
            }

            if(app.Menu.prototype.collider(redeem, animColliderRedeem)){
                console.log("asda")
                TweenMax.staggerTo(animR, 0.8, { opacity: 1, delay: 0.5}, 0.2)
                
                setTimeout(function(){
                    TweenMax.staggerTo(animatedTxtR, 0.4, { y: 0, opacity: 1, delay: 0.1}, 0.2)
                    
                },600)
            }
    


        })






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