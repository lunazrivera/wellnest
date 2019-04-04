// $("button").on("click", function(){
//     var legWork = $(this).attr("data-workout-leg");

//     var queryURL1 = "https://jflopezr11.github.io/WorkoutJSON/workouts/workouts-1.json";

//     $.ajax({
//         url:queryURL1,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response.Workouts);

//         for (var i = 0; i < response.Workouts.length; i++) {
//             var day1= response.Workouts[i].plan.day1
//             var day2= response.Workouts[i].plan.day2
//             $("#legs-appear-here").append(
//                 "<h5 class='card-title'>" + response.Workouts[i].name + "</h5>" + 
//                 "<p class='card-text'> Type: "+ response.Workouts[i].type + "<br> Summary: " +
//                 response.Workouts[i].summary + "<br>" + "Workout Plan: " + "<br>"
//             )	
//             for (var j = 0; j < day1.length; j++) {
//                 var exercise = day1[j]
//                 $("#legs-appear-here").append(
//                     "Exercise: " + exercise.exercisename + " " + " Sets: " + exercise.sets + " Reps: " + 
//                     + " " + exercise.reps + " Example video: " + exercise.example + "<br>" 
//                 )
                

//             }
//             for (var u = 0; u < day2.length; u++) {
//                 var exerciseTwo = day2[u]
//                 $("#legs-appear-hear").append(
//                     "Exercise: " + exerciseTwo.exercisename + " " + " Sets: " + exerciseTwo.sets + " Reps: " + 
//                     + " " + exerciseTwo.reps + " Example video: " + exerciseTwo.example + "<br>" 
//                 )

//             }
//         }	
            

//     })
// })

// $("button").on("click", function(){
//     var cardioWork = $(this).attr("data-workout-cardio");

//     var queryURL2 = "https://jflopezr11.github.io/WorkoutJSON/workouts/workouts-2.json";

//     $.ajax({
//         url:queryURL2,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response.Workouts);

//         for (var w = 0; w < response.Workouts.length; w++) {
//             var day3= response.Workouts[w].plan.warmup
        
//             $("#cardio-appears-here").append(
//                 "<h5 class='card-title'>" + response.Workouts[w].name + "</h5>" + 
//                 "<p class='card-text'> Type: "+ response.Workouts[w].type + "<br> Summary: " +
//                 response.Workouts[w].summary + "<br>" + "Workout Plan: " + "<br>"
//             )	
//             for (var e = 0; e < day3.length; e++) {
//                 var exerciseThree = day3[e]
//                 $("#cardio-appears-here").append(
//                     "Exercise: " + exerciseThree.exercisename + " " + " Sets: " + exerciseThree.sets + " Reps: " + 
//                     + " " + exerciseThree.reps + " Example video: " + exerciseThree.example + "<br>" 
//                 )
                

//             }
//             for (var d = 0; d < day2.length; d++) {
//                 var day4= response.Workouts[d].plan.mainset
//                 var exerciseFour = day4[d]
//                 $("#cardio-appears-hear").append(
//                     "Exercise: " + exerciseFour.exercisename + " " + " Sets: " + exerciseFour.sets + " Reps: " + 
//                     + " " + exerciseFour.reps + " Example video: " + exerciseFour.example + "<br>" 
//                 )

//             }
//         }	
            

//     })
// })

// $("button").on("click", function(){
//     var cardioWork = $(this).attr("data-workout-lifting");

//     var queryURL3 = "https://jflopezr11.github.io/WorkoutJSON/workouts/workouts-3.json";

//     $.ajax({
//         url:queryURL3,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response.Workouts);

//         for (var t = 0; t < response.Workouts.length; t++) {
//             var day5= response.Workouts[t].plan.day1
        
//             $("#cardio-appears-here").append(
//                 "<h5 class='card-title'>" + response.Workouts[t].name + "</h5>" + 
//                 "<p class='card-text'> Type: "+ response.Workouts[t].type + "<br> Summary: " +
//                 response.Workouts[t].summary + "<br>" + "Workout Plan: " + "<br>"
//             )	
//             for (var p = 0; p < day1.length; p++) {
//                 var exerciseFive = day1[p]
//                 $("#cardio-appears-here").append(
//                     "Exercise: " + exerciseFive.exercisename + " " + " Sets: " + exerciseFive.sets + " Reps: " + 
//                     + " " + exerciseFive.reps + " Example video: " + exerciseFive.example + "<br>" 
//                 )
                

//             }
//             for (var d = 0; d < day2.length; d++) {
//                 var day4= response.Workouts[d].plan.mainset
//                 var exerciseFour = day4[d]
//                 $("#cardio-appears-hear").append(
//                     "Exercise: " + exerciseFour.exercisename + " " + " Sets: " + exerciseFour.sets + " Reps: " + 
//                     + " " + exerciseFour.reps + " Example video: " + exerciseFour.example + "<br>" 
//                 )

//             }
//         }	
            

//     })
// })

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
                "<h5 class='card-title'>" + workouts[i].name + "</h5>" + 
                     "<p class='card-text'> Type: "+ workouts[i].type + "<br> Summary: " +
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
                    "Exercise: " + exer[i].exercisename + " " + " Sets: " + exer[i].sets + " Reps: " + 
                    + " " + exer[i].reps + " Example video: " + exer[i].example + "<br>" 
                )}
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
                "<h5 class='card-title'>" + workouts2[j].name + "</h5>" + 
                     "<p class='card-text'> Type: "+ workouts2[j].type + "<br> Summary: " +
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
                    "Exercise: " + exer2[j].exercisename + " " + " Sets: " + exer2[j].sets + " Reps: " + 
                    + " " + exer2[j].reps + " Example video: " + exer2[j].example + "<br>" 
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
                "<h5 class='card-title'>" + workouts3[w].name + "</h5>" + 
                     "<p class='card-text'> Type: "+ workouts3[w].type + "<br> Summary: " +
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
                    "Exercise: " + exer3[w].exercisename + " " + " Sets: " + exer3[w].sets + " Reps: " + 
                    + " " + exer3[w].reps + " Example video: " + exer3[w].example + "<br>" 
                )}
            }
        }
    }) 
})