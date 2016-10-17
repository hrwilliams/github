var apiKey = require('./../.env').apiKey;
function User() {

}

User.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for (var i = 0; i < response.length; i++){
      $("#showRepos").append("<li>" + "Name: " + response[i].name + " // Description: " + response[i].description);
    }
  }).fail(function(error){
  });
};

exports.userModule = User;
