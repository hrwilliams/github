var User = require('./../js/github.js').userModule;

$(document).ready(function() {
  $('#githubUser').click(function() {
    event.preventDefault();
    var userName = $('#user').val();
    $('#user').val("");
    $('#showRepos').text("");
    newUserObject = new User();
    newUserObject.getRepos(userName);
  });
});
