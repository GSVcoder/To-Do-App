var taskTxt = document.querySelector("#taskTxt");
var ulNotesDiv = document.querySelector(".ulNotesDiv");

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

function createNote() {
  const li = document.createElement("li");
  li.classList.add("liNotesDiv");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");
  const delBtn = document.createElement("button");
  delBtn.classList.add("removeBtn");
  delBtn.textContent = "X";
  li.append(checkbox, taskTxt.value, delBtn);
  ulNotesDiv.append(li);
}

ulNotesDiv.addEventListener("click", (e) => {
  if (
    e.target.parentElement.classList.contains("liNotesDiv") &&
    e.target.classList.contains("checkbox")
  ) {
    console.log(e.target.nextElementSibling.style);
    if (e.target.checked === true) {
      e.target.parentElement.style.color = "red";
      e.target.parentElement.style.textDecoration = "line-through white 2px";
      e.target.nextElementSibling.style.textDecoration = "none";
    } else if (e.target.checked === false) {
      e.target.parentElement.style.color = "white";
      e.target.parentElement.style.textDecoration = "none";
    }
  }
});

ulNotesDiv.addEventListener("dblclick", (e) => {
  if (
    e.target.parentElement.classList.contains("liNotesDiv") &&
    e.target.classList.contains("removeBtn")
  ) {
    e.target.parentElement.remove();
  }
});
