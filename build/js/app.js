(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "8363310c6e273d3f79355e56729a8aee666bca2e";

},{}],2:[function(require,module,exports){
var apiKey = require("./../.env").apiKey;

exports.getRepos = function(user){
	var url = "https://api.github.com/users/";
  	$.get(url + user + "?access_token=" + apiKey ).then(function(response){

		var name = response.name;
		var image = response.avatar_url;
		var profileUrl = response.html_url;
		var hireable = response.hireable;
		var area = response.location;
		if (name === null){
			$('#result').html("<h2> No users found </h2>");
			$('#repos').html("<li class='animated slideInDown emptyList'>empty</li>");
		} else {
			var reposUrl = response.repos_url;
			$.get(reposUrl + "?page=2").then(function(response2){
				$.each(response2, function(i, repo){

					$('.profilePic').html("<img id='avatar' src='"+ image +"'>");
					$('#caption').text(name);
					$('#profileLink').html("<p id='profileLink'><a href='"+ profileUrl +" 'target='_blank''>" + profileUrl + "</a></p>");
					$('#result').html("<h3>" + name + "'s repositories</h3>");
					$('#repos').removeClass('emptyList').prepend("<li class='animated slideInDown'><a target='_blank' href='"+ repo.svn_url +"'>" + repo.name + "</a><span> " + repo.description + "</span></li>");
					if(hireable){
						$('#hireable').html("<img src='./../../check.svg' id='checkmark'><span>Seeking Work</span>" + "<p id='location'>" + area +"</p>" );
					} else {
						$('#hireable').html("<p id='location'>" + area +"</p>" );
					}
				});
			});
		}
  	}).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"../js/user.js":2}]},{},[3]);
