var getRepos = require('../js/user.js').getRepos;

<<<<<<< HEAD
$(window).load(function() {
    // start up after 2sec no matter what
    window.setTimeout(function(){

        $('body').removeClass("loading").addClass('loaded');
    }, 2000);
=======
$(document).ready(function() {
	$('form').submit(function(event){
		event.preventDefault();
		var searchedUser = $('#user').val();
		var results = getRepos(searchedUser);

	});
>>>>>>> 6437fa3106dd5821977d7c84a2d64a2b77fa0876
});
