var user = require ('../js/user.js').user;

$(window).load(function() {
    // start up after 2sec no matter what
    window.setTimeout(function(){

        $('body').removeClass("loading").addClass('loaded');
    }, 2000);
});
