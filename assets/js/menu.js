(function(app) { 
	'use strict'; 
	
    var Menu = function() {};
    
	Menu.prototype.init = function() {
        var _self = this;
        _self.burgerClick();
        _self.menuItemClick();
        _self.setMenuActiveStateWhenScrolling();
    };
    

    app.Menu = Menu;


    Menu.prototype.burgerClick = function(){
        var menuContainer = $(".nav-header-wrapper");
        var menuWrapper = $(".nav-header-container");
        var tl = new TimelineMax();
        var flag = false;
        $(".hamburger").on("click", function(){
            $(this).toggleClass("is-active");
            
            if (!flag) {
                menuWrapper.addClass("active")
                tl.to(menuContainer, 0 , {display: "flex"})
                .to(menuContainer, .3, {opacity: 1})
                $("body, html").css("overflow", "hidden")
                flag = true;
                
            }else {
                console.log(flag)
                menuWrapper.removeClass("active")
                tl.to(menuContainer, .3, {opacity: 0})
                  .to(menuContainer, 0 , {display: "none"})
                  $("body, html").css("overflow", "auto")
                flag = false;
            }

        })
    };

    Menu.prototype.menuItemClick = function(){
        var item = $(".nav-header-wrapper ul li a");

        item.on("click", function(e){
            var hash = e.target.hash;
            var position = $(hash).offset().top;
            e.preventDefault();
            $('body,html').animate({ scrollTop: position}, 500);
            item.removeClass("active");
            $(this).addClass("active");
            if($(window).outerWidth() < 991){
                setTimeout(function(){
                    $(".hamburger").trigger("click");
                },500)
                
            }
        })
    }

    Menu.prototype.collider = function($div1, $div2){
       
        // Div 1 data
        var d1_offset = $div1.offset();
        var d1_height = $div1.outerHeight(true);
        var d1_width = $div1.outerWidth(true);
        var d1_distance_from_top = d1_offset.top + d1_height;
        var d1_distance_from_left = d1_offset.left + d1_width;
    
        // Div 2 data
        var d2_offset = $div2.offset();
        var d2_height = $div2.outerHeight(true);
        var d2_width = $div2.outerWidth(true);
        var d2_distance_from_top = d2_offset.top + d2_height;
        var d2_distance_from_left = d2_offset.left + d2_width;
    
        var not_colliding = (d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left);
    
        // Return whether it IS colliding
        return !not_colliding;
        

    }

    Menu.prototype.setMenuActiveStateWhenScrolling = function (){
        var active = $("#home");
        // Code below can still be optimized
        $(window).on("scroll", function(){
            var home =$("#home");
            var momentum =$("#lorem-momentum");
            var artist =$("#the-artist");
            var artist2 =$("#the-artist-2");
            var redeem =$("#redeem");
            
            
            var collider = $(".collide");
            var animCollider = $(".animation-collider");


            // var animM = momentum.find(".animated-img");
            // var animatedTxtM =  momentum.find(".animated-text");

            // var animA = artist.find(".animated-img");
            // var animatedTxtA =  artist.find(".animated-text");

            // var animAA = artist2.find(".animated-img");
            // var animatedTxtAA =  artist2.find(".animated-text");

            // var animR = redeem.find(".animated-img");
            // var animatedTxtR =  redeem.find(".animated-text");


            // For menu active state when scrolling
            $(".nav-header-wrapper ul li a").removeClass("active")
            if(app.Menu.prototype.collider(home, collider)){
                $("[href='#home']").addClass("active")
              

            }
            if(app.Menu.prototype.collider(momentum, collider)){
                $("[href='#lorem-momentum']").addClass("active")
                
            }

            if(app.Menu.prototype.collider(artist, collider)){
                $("[href='#the-artist']").addClass("active")
                
            }
            if(app.Menu.prototype.collider(artist2, collider)){
                $("[href='#the-artist']").addClass("active")
                
            }
            if(app.Menu.prototype.collider(redeem, collider)){
                $("[href='#redeem']").addClass("active")
                
            }

            // For animation detection

            // if(app.Menu.prototype.collider(momentum, animCollider)){
            //     app.Animation.prototype.sectionElementReveal(animM, animatedTxtM);
            // }
            // if(app.Menu.prototype.collider(artist, animCollider)){
            //     app.Animation.prototype.sectionElementReveal(animA, animatedTxtA);
            // }
            // if(app.Menu.prototype.collider(artist2, animCollider)){
            //     app.Animation.prototype.sectionElementReveal(animAA, animatedTxtAA);
            // }
            // if(app.Menu.prototype.collider(redeem, animCollider)){
            //     app.Animation.prototype.sectionElementReveal(animR, animatedTxtR);
            // }
        })

    }


    app.ready(function () {
        Menu.prototype.init()
    })

})(window.app);