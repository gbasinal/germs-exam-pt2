(function(app) { 
	'use strict'; 
	
    var Menu = function() {};
    
	Menu.prototype.init = function() {
        var _self = this;
        _self.burgerClick();
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


    app.ready(function () {
        Menu.prototype.init()
    })

})(window.app);