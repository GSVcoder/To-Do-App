var taskTxt = document.querySelector("#taskTxt");
var ulNotesDiv = document.querySelector(".ulNotesDiv");

// Add new to to with ENTER
taskTxt.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (taskTxt.value === "") {
      alert("No Task");
    } else {
      createNote();
      taskTxt.value = "";
    }
  }
});

// Create note and add
function createNote() {
  const li = document.createElement("li");
  li.classList.add("liNotesDiv");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");
  const span = document.createElement("span");
  span.textContent = taskTxt.value;
  span.classList.add("checkbox");
  const delBtn = document.createElement("button");
  delBtn.classList.add("removeBtn");
  delBtn.textContent = "X";
  li.append(checkbox, span, delBtn);
  ulNotesDiv.append(li);
}

// Mark completed/uncompleted
ulNotesDiv.addEventListener("click", (e) => {
  if (
    e.target.parentElement.classList.contains("liNotesDiv") &&
    e.target.classList.contains("checkbox")
  ) {
    console.log(e.target.nextSibling);
    if (e.target.checked === true) {
      e.target.nextSibling.style.color = "red";
      e.target.nextSibling.style.textDecoration = "line-through white 2px";
    } else if (e.target.checked === false) {
      e.target.nextSibling.style.color = "white";
      e.target.nextSibling.style.textDecoration = "none";
    }
  }
});

// Delete Note
ulNotesDiv.addEventListener("dblclick", (e) => {
  if (
    e.target.parentElement.classList.contains("liNotesDiv") &&
    e.target.classList.contains("removeBtn")
  ) {
    e.target.parentElement.remove();
  }
});
