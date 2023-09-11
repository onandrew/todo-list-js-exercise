// Arrays to keep track of each task's state
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, desciption) {
  const task = {
    title : title,
    desciption : desciption,
    complete: false,
     logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted : function(){
      this.complete = true;
    }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// marks the provided task as completed


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed


