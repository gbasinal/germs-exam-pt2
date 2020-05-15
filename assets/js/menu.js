(function(app) { 
	'use strict'; 
	
    var Menu = function() {};
    
	Menu.prototype.init = function() {
        var _self = this;
        _self.burgerClick();
    };
    

    app.Menu = Menu;


    Menu.prototype.burgerClick = function(){
        $(".hamburger").on("click", function(){
            $(this).toggleClass("is-active");
        })
    };


    app.ready(function () {
        Menu.prototype.init()
    })

})(window.app);