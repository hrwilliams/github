var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#githubUser').click(function() {
    event.preventDefault();
    var userName = $('#user').val();
    $('#user').val("");
    $('#showRepos').text("The user you have chosen is " + userName + ".");
    $.get('https://api.github.com/search/repositories?q=user:'+ userName + '&access_token=' + apiKey).then(function(response) {
     console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
});
});
