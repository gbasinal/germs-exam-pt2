(function(app) { 
	'use strict'; 
	
    var Menu = function() {};
    
	Menu.prototype.init = function() {
        var _self = this;
        _self.burgerClick();
        _self.menuItemClick();
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


    app.ready(function () {
        Menu.prototype.init()
    })

})(window.app);