var apiKey = require("./../.env").apiKey;

exports.getRepos = function(user){
	var url = "https://api.github.com/users/";
  	$.get(url + user + "?access_token=" + apiKey ).then(function(response){
		var name = response.name;
		if (name === null){
			$('#result').html("<h2> No users found </h2>");
		} else {
			var reposUrl = response.repos_url;
			$.get(reposUrl).then(function(response2){
				$.each(response2, function(i, repo){
				$('#result').html("<h2> Your results: </h2><hr><h3>" + name + "</h3>");
				$('#repos').append("<li><a target='_blank' href='"+ repo.svn_url +"'>" + repo.name + "</a></li>");
					// if(repo.hasOwnProperty('description')){
					// 	$('#repos').append("<li>" + repo.name + "</li>");
					// } 
				});

			});
		}
  	}).fail(function(error){
    console.log(error.responseJSON.message);
  });
}


