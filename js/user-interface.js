var getRepos = require('../js/user.js').getRepos;


$(window).load(function() {
    // start up after 2sec no matter what
    window.setTimeout(function(){

        $('body').removeClass("loading").addClass('loaded');
    }, 2000);
});
$(document).ready(function() {
	$('form').submit(function(event){
		event.preventDefault();
		var searchedUser = $('#user').val();
		var results = getRepos(searchedUser);
  });

  // loading animation
  $(function() {
  $('input').on('change', function() {
    var input = $(this);
    if (input.val().length) {
      input.addClass('populated');
    } else {
      input.removeClass('populated');
    }
  });

    setTimeout(function() {
      $('#user').trigger('focus');
    }, 500);
  });
});
