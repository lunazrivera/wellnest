$(document).ready(function() {
     $("#theLegs").on("click", function(){
          var legWork = $(this).attr("data-workout-leg");
      
          var queryURL1 = "https://jflopezr11.github.io/WorkoutJSON/workouts/workouts-1.json";
      
          $.ajax({
              url:queryURL1,
              method: "GET"
          }).then(function(response) {
              console.log(response)
              console.log(response.Workouts)
      
              // we assign response to a variable so that we don't repeat ourself
              let workouts = response.Workouts;
      
              for (let i = 0; i < workouts.length; i++) {
                  // we are console logging each workout
                  console.log(workouts[i]);
                  // we save it into a variable so that we dont repeat ourself again
                  // we pluck plan specifically from our workout
                  $("#legs-appear-here").append(
                      "<div class='card-header'>" + workouts[i].name + "</div>" + 
                           "<div class='card-text'> Type: "+ workouts[i].type + "<br> Summary: " +
                          workouts[i].summary + "<br>" + "Workout Plan: " + "<br>"
                  )
                  let plan = workouts[i].plan;
                  // each workout that we have is an object that's why we'll be using our for...in loop
                  // the syntax for it is similar to a normal for loop, first we declare our iterator then after
                  // the in keyword we add our object in this case it's the plan object
                  for (let day in plan) {
                      // this will log the day
                      // this is similar to array[i]
                      // in this case day is the key and we use it to access our plan object
                      console.log(plan[day])
                      let exer = plan[day]
      
                      for (let i = 0; i < plan[day].length; i++) {
                          console.log(exer[i].exercisename)
                          console.log(exer[i].sets)
                          console.log(exer[i].reps)
                          console.log(exer[i].example)
      
                          $("#legs-appear-here").append(
                              "<br>" + "Exercise: " + exer[i].exercisename + " " + " Sets: " + exer[i].sets + " Reps: " + 
                              + " " + exer[i].reps + " Example video: <a href='" + exer[i].example + "'>" + exer[i].example + "</a><br>" 
                          );
                      }
                  }
              }
          }) 
      })    
      
      $("#cardioHitt").on("click", function(){
          var cardioWork = $(this).attr("data-workout-cardio");
      
          var queryURL2 = "https://jflopezr11.github.io/WorkoutJSON/workouts/workouts-2.json";
      
          $.ajax({
              url:queryURL2,
              method: "GET"
          }).then(function(response) {
              console.log(response)
              console.log(response.Workouts)
      
              // we assign response to a variable so that we don't repeat ourself
              let workouts2 = response.Workouts;
      
              for (let j = 0; j < workouts2.length; j++) {
                  // we are console logging each workout
                  console.log(workouts2[j]);
                  // we save it into a variable so that we dont repeat ourself again
                  // we pluck plan specifically from our workout
                  $("#cardio-appears-here").append(
                      "<div class='card-header'>" + workouts2[j].name + "</div>" + 
                           "<div class='card-text'> Type: "+ workouts2[j].type + "<br> Summary: " +
                          workouts2[j].summary + "<br>" + "Workout Plan: " + "<br>"
                  )
                  let warm = workouts2[j].plan;
                  // each workout that we have is an object that's why we'll be using our for...in loop
                  // the syntax for it is similar to a normal for loop, first we declare our iterator then after
                  // the in keyword we add our object in this case it's the plan object
                  for (let hit in warm) {
                      // this will log the day
                      // this is similar to array[i]
                      // in this case day is the key and we use it to access our plan object
                      console.log(warm[hit])
                      let exer2 = warm[hit]
      
                      for (let j = 0; j < warm[hit].length; j++) {
                          console.log(exer2[j].exercisename)
                          console.log(exer2[j].sets)
                          console.log(exer2[j].reps)
                          console.log(exer2[j].example)
      
                          $("#cardio-appears-here").append(
                          "<br>" + "Exercise: " + exer2[j].exercisename + " " + " Sets: " + exer2[j].sets + " Reps: " + 
                          + " " + exer2[j].reps + " Example video: <a href='" + exer2[j].example + "'>" + exer2[j].example + "</a><br>" 
                      )}
                  }
              }
          }) 
      })
      
      $("#pLift").on("click", function(){
          var liftWork = $(this).attr("data-workout-lift");
      
          var queryURL3 = "https://jflopezr11.github.io/WorkoutJSON/workouts/workouts-3.json";
      
          $.ajax({
              url:queryURL3,
              method: "GET"
          }).then(function(response) {
              console.log(response)
              console.log(response.Workouts)
      
              // we assign response to a variable so that we don't repeat ourself
              let workouts3 = response.Workouts;
      
              for (let w = 0; w < workouts3.length; w++) {
                  // we are console logging each workout
                  console.log(workouts3[w]);
                  // we save it into a variable so that we dont repeat ourself again
                  // we pluck plan specifically from our workout
                  $("#powerlifting-appears-here").append(
                      "<div class='card-header'>" + workouts3[w].name + "</div>" + 
                           "<div class='card-text'> Type: "+ workouts3[w].type + "<br> Summary: " +
                          workouts3[w].summary + "<br>" + "Workout Plan: " + "<br>"
                  )
                  let liftEm = workouts3[w].plan;
                  // each workout that we have is an object that's why we'll be using our for...in loop
                  // the syntax for it is similar to a normal for loop, first we declare our iterator then after
                  // the in keyword we add our object in this case it's the plan object
                  for (let power in liftEm) {
                      // this will log the day
                      // this is similar to array[i]
                      // in this case day is the key and we use it to access our plan object
                      console.log(liftEm[power])
                      let exer3 = liftEm[power]
      
                      for (let w = 0; w < liftEm[power].length; w++) {
                          console.log(exer3[w].exercisename)
                          console.log(exer3[w].sets)
                          console.log(exer3[w].reps)
                          console.log(exer3[w].example)
      
                          $("#powerlifting-appears-here").append(
                          "<br>" + "Exercise: " + exer3[w].exercisename + " " + " Sets: " + exer3[w].sets + " Reps: " + 
                          + " " + exer3[w].reps + " Example video: <a href='" + exer3[w].example + "'>" + exer3[w].example +"</a><br>" 
                      )}
                  }
              }
          }) 
      })
});