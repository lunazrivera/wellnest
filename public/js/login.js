$(document).ready(function() {
     //Getting reference to the name input
     var firstName = $("#firstname");
     var lastName = $("#lastname");
     var newUsername = $("#new-username");
     var newPassword = $("#new-password");

     //Adding event delegation to the document but focusing
     //on specific id's
     // $(document).on("click", "#login", handleLoginForm);
     $("#submit-button").on("click", function(event) {
          event.preventDefault();

          createUser({
               username: newUsername.val().trim(),
               firstname: firstName.val().trim(),
               lastname: lastName.val().trim(),
               password: newPassword.val().trim()
          });

               newUsername.val("");
               firstName.val("");
               lastName.val("");
               newPassword.val("");
     });

     $("#login").on("click", function(event) {
          event.preventDefault();
          var username = $("#username").val().trim();
          var password = $("#password").val().trim();

          if(!username || !password) {
               return;
          }

          console.log(username, password)

          var userCredentials = {
               username: username,
               password: password
          }
          
          loginAttempt(userCredentials);

     });

     function createUser(userData) {
          $.post("/api/users", userData).done(function(data) {
               // console.log(data)
               
          })
          
          
     }

     function loginAttempt(userCred){
          $.post("/api/login", userCred, function() {
               // console.log("Below user credentials"); //this is not console login
               // console.log(userCred);  //this is not console login
               window.location = '/task';
          })
     }

     


})