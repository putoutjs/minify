(function() {
    'use strict';
    
    function createElement() {
        for (let i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
    
    createElement(1, 2);
})();
