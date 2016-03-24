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
						$('#hireable').html("<img src='../../check.svg' id='checkmark'><span>Seeking Work</span>" + "<p id='location'>" + area +"</p>" );
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
