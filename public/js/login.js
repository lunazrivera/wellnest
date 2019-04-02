$(document).ready(function() {
     //Getting reference to the name input
     var username = $("#username");
     var password = $("#password");
     var firstName = $("#firstname");
     var lastName = $("#lastname");
     var newUsername = $("#newusername");
     var newPassword = $("#newpassword");

     //Adding event delegation to the document but focusing
     //on specific id's
     // $(document).on("click", "#login", handleLoginForm);
     $("#submit").on("click", function(event) {
          event.preventDefault();

          createUser({
               username: newUsername.val().trim(),
               firstname: firstName.val().trim(),
               lastname: lastName.val().trim(),
               password: newPassword.val().trim()
          });
     });

     $("#login").on("click", function(event) {
          event.preventDefault();

          if(!username.val().trim() || !password.val().trim()) {
               return;
          }
          var userCredentials = {
               username: username.val().trim(),
               password: password.val().trim()
          }
          
          loginAttempt(userCredentials);

     });

     function createUser(userData) {
          $.post("/api/users", userData).then(function() {
               alert("Your account has been created");
          })
     }

     function loginAttempt(userCred){
          console.log("hello")
          $.post("/api/login", userCred)
     }


})