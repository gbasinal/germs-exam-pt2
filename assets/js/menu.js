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
        var tl = new TimelineMax();
        var flag = false;
        $(".hamburger").on("click", function(){
            $(this).toggleClass("is-active");
            
            if (!flag) {
                tl.to(menuContainer, 0 , {display: "flex"})
                .to(menuContainer, .3, {opacity: 1})
                $("body, html").css("overflow", "hidden")
                flag = true;
                
            }else {
                console.log(flag)
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

        })
    }

    Menu.prototype.setMenuActiveStateWhenScrolling = function (){


        var is_colliding = function($div1, $div2) {
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
        };

        $(window).on("scroll", function(){
            var home =$("#home");
            var momentum =$("#lorem-momentum");
            var artist =$("#the-artist");
            var artist2 =$("#the-artist-2");
            var redeem =$("#redeem");
  
            var collider = $(".collide");

            $(".nav-header-wrapper ul li a").removeClass("active")
            if(is_colliding(home, collider)){
                $("[href='#home']").addClass("active")
            }
            if(is_colliding(momentum, collider)){
                $("[href='#lorem-momentum']").addClass("active")
            }
            if(is_colliding(artist, collider)){
                $("[href='#the-artist']").addClass("active")
            }
            if(is_colliding(artist2, collider)){
                $("[href='#the-artist']").addClass("active")
            }
            if(is_colliding(redeem, collider)){
                $("[href='#redeem']").addClass("active")
            }
        })

        // $(".section").on('inview', function(visible) {
            
        //     var _self = $(this);
        //     var id = _self.attr("id");
        //     console.log(id)
     
        //     // $(".nav-header-wrapper ul li a").removeClass("active")
        //     // $("[href='#"+id+"']").addClass("active")


        //     if (visible) {
               
        //         $(".nav-header-wrapper ul li a").removeClass("active")
        //         $("[href='#"+id+"']").addClass("active")
              
        //     }

        // });
    }


    app.ready(function () {
        Menu.prototype.init()
    })

})(window.app);