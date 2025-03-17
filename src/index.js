document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const toDoList = [];

  const taskForm = document.querySelector("#create-task-form");
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(taskForm)
    const taskinput = document.getElementById("new-task-description");
    // console.log(taskinput)

    toDoList.push(taskinput.value.trim());
    // console.log(toDoList);

    taskForm.reset();
    // auto-clear
    // createTaskForm.reset();
    displayToDoList(toDoList);
  });
});
   
  function displayToDoList(toDos) {
    unorderedListElement = document.getElementById("tasks");

    unorderedListElement.innerHTML = "";
    
    toDos.forEach((toDo) => {
      const li = document.createElement("li");
      li.textContent = toDo;
      // unorderedListElement.appendChild(li);

     const deleteButton = document.createElement("button");
      deleteButton.textContent = "x";
      deleteButton.addEventListener("click", () => {
        // li.remove()

        toDos = toDos.filter((item) => item !== toDo);
        displayToDoList(toDos);
        
       
      });
       li.appendChild(deleteButton);
      unorderedListElement.appendChild(li);
    });
  }
  
