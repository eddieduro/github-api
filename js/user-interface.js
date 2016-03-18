var getRepos = require('../js/user.js').getRepos;

$(document).ready(function() {
	$('form').submit(function(event){
		event.preventDefault();
		var searchedUser = $('#user').val();
		var results = getRepos(searchedUser);

	});
});
