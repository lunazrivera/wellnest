$(document).ready(function() {

     getUser();
     function getUser() {
     $.ajax({
          url: "/api/user-logged",
          method: "GET",
     }).done(function(data) {
          // console.log("ajax request completed")
          // console.log(data.username)
          $("#name-of-user").text(data.username)
          userLogged = data.username;
          userId = data.id;
     });
}

})
