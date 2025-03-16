document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  const button = document.getElementById("submit");
  // const newTaskDescription = getElementById("new-task-description");

  button.addEventListener("click", function () {
    console.log("button clicked!");
  });
  
  const list = ["read js", "do labs", "clean"];
  list.push("touch some grass");
  console.log(list);

  
  list.forEach((task) => {
    console.log(task);
  });

  
  // const taskArray = [];

  
 
  const taskArray = [];
  // function createTaskList(task)
  const newTaskList = [];
  const submitTask = document.querySelector("#tasks");
    submitTask.addEventListener("click", () => {
      const description = document.getElementById("input-description").value;
      console.log(description);
    newTaskList.push()
  });

  //  myform.addEventListener("submit", function (event) {
  //    event.preventDefault();
  //  });
});