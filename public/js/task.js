$(document).ready(function() {
     //Getting a reference to the input field where user adds a new task
     var $newTaskInput = $("input.new-task");
     var $newDateInput = $("input.new-date");
     var $newSTimeInput = $("input.new-stime");
     var $newETimeInput = $("input.new-etime");
     var $taskContainer = $(".task-area");
     var userLogged;
     var userId;
     //Tasks array
     var tasks;

     // Get task
     getTask();
     //Event delegation handling
     $(document).on("submit", "#task-form", insertTask);
     $(document).on("click", "button.delete", deleteTask);
     $(document).on("click", ".task-item", editTask);
     $(document).on("click", "button.complete", toggleComplete);
     $(document).on("keyup", ".task-item", finishEdit);
     $(document).on("blur", ".task-item", cancelEdit)
     


     function insertTask(event) {
          event.preventDefault();
          var task = {
               taskname: $newTaskInput.val().trim(),
               date: $newDateInput.val().trim(),
               starttime: $newSTimeInput.val().trim(),
               endtime: $newETimeInput.val().trim(),
               complete: false,
               userId: userId
          }

          // console.log(task);

          $.post("/api/task", task, getTask);
          $newTaskInput.val("");
          $newDateInput.val("");
          $newSTimeInput.val("");
          $newETimeInput.val("");
     }

     function getTask() {
          $.get("/api/task", function(data) {
               
               // console.log("Below is data")
               // console.log(data);
               tasks = data;
               // console.log(tasks)
               initializeRows();
          })
     }

     function initializeRows() {
          $taskContainer.empty();
          var rowsToAdd = [];
          // console.log(tasks, "initialize rows");
          for (var i = 0; i < tasks.length; i++) {
               rowsToAdd.push(createNewRow(tasks[i]));
          }
          // console.log("rows below")
          // console.log(rowsToAdd)
          $taskContainer.append(rowsToAdd);
     }
     
     function createNewRow(task) {
          var $newInputRow = $(
               [
                    "<tr data-id=" + task.id + ">",
                    "<td class='task-item' >",
                    "<span >", 
                    task.taskname,
                    "</span>",
                    "<input type='text' class='edit' name='taskname' style='display: none;'>",
                    "</td>",
                    "<td class='task-item' >",
                    "<span>",
                    task.date,
                    "</span>",
                    "<input type='text' class='edit' name='date' style='display: none;'>",
                    "</td>",
                    "<td class='task-item' >",
                    "<span>",     
                    task.starttime,
                    "</span>",
                    "<input type='text' class='edit' name='starttime' style='display: none;'>",
                    "</td>",
                    "<td class='task-item' >",
                    "<span>",
                    task.endtime,
                    "</span>",
                    "<input type='text' class='edit' name='endtime' style='display: none;'>",
                    "</td>",
                    "<td class='task-item editors' >",
                    "<button class='delete btn btn-danger'>x</button>",
                    "<button class='complete btn btn-primary' name='complete'>✓</button>",
                    "</td>",
                    "</tr>"
               ].join("")
          );

          $newInputRow.find("button.delete").data("id", task.id);
          $newInputRow.find("input.edit").css("display", "none");
          $newInputRow.data("task", task); //Not sure if this will work in our case.\

          if (task.complete) {
               $newInputRow.find("span").css("text-decoration", "line-through");
          }
          // console.log()
          // console.log()
          // console.log()
          // console.log("New input below")
          // console.log($newInputRow);
          // console.log()
          // console.log()
          // console.log()
          return $newInputRow;
     }

     //Deleting function
     function deleteTask(event) {
          event.stopPropagation();
          var id = $(this).data("id");

          $.ajax({
               method: "DELETE",
               url: "/api/task/" + id
          }).then(getTask);
     }

     function editTask () {
          var currentTask = $(this).children("span");
          // console.log(this);
          // console.log(currentTask.text());
          $(this).children().hide();
          $(this).children("input.edit").val(currentTask.text());
          $(this).children("input.edit").show();
          $(this).children("input.edit").focus();
     }

     function toggleComplete(event) {
          debugger;
          event.stopPropagation();
          var taskId = $(this).closest("[data-id]").attr('data-id');
          var task = $(this).parent().children("span");
          console.log("You are in toggle complete")
          console.log(task.complete)
          var field = $(this).attr("name");
          var payload = {};
          task.complete = !task.complete;
          task = task.complete
          payload[field] = task;
          payload.somepropertyname;
          updateTask(taskId, payload)
     }

     function finishEdit(event) {
          if (event.which !== 13) { 
               return;
          } else {
          var updatedTask = $(this).children("span");
          var value = updatedTask.text($(this).children("input").val().trim()).text(); 
          $(this).blur();
          var taskId = $(this).closest("[data-id]").attr('data-id');
          var field = $(this).children("input").attr("name");
          var payload = {};
          payload[field] = value;
          payload.somepropertyname;
          // payload['somepropertyname']
          updateTask(taskId, payload);
          }
          
     }

     function updateTask(taskId, task) {
          $.ajax({
               method: "PUT",
               url: "/api/task/" + taskId,
               data: task
          }).then(getTask);
     }

     // function updateComplete(taskId, task) {
     //      $.ajax({
     //           method: "PUT",
     //           url: "/api/task/complete" + taskId,
     //           data: task
     //      }).then(getTask);
     // }

     function cancelEdit() {
          var currentTask = $(this).data("task");
          if(currentTask) {
               $(this).children().hide();
               $(this).children("input.edit").val(currentTask.text);
               $(this).children("span").show();
               $(this).children("button").show();
          }
     }









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