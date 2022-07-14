var taskTxt = document.querySelector("#taskTxt");
var ulNotesDiv = document.querySelector(".ulNotesDiv");
let date = document.querySelector("#date");
let time = document.querySelector("#time");

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
  dateAndTime();
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

// Get input of date and time
function dateAndTime() {
  if (date.value === "") {
    return null;
  } else if (date.value !== "") {
    console.log(date.value);
  }
}

// Animations
gsap.from(".header", { delay: 1, duration: 1, y: "-100%", ease: "bounce" });
gsap.from(".middle", { duration: 1, y: "-100%", ease: "bounce" });
gsap.from(".toDo", { delay: 2, duration: 1, y: "-200%", ease: "bounce" });
