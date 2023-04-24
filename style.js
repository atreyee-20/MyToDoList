const inputbox = document.getElementById("inbox");
const list = document.getElementById("listcont");

function addtask() {
  if (inputbox.value.trim() == '') {
    alert("Please Add a todo");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    list.appendChild(li);
    inputbox.value = "";
    save();
  }
}

list.addEventListener("click", function(e) {
  if (e.target.tagName == 'LI') {
    e.target.classList.toggle("checked");
    save();
  } else if (e.target.tagName == 'SPAN') {
    e.target.parentElement.remove();
    save();
  }
}, false);

function save() {
  localStorage.setItem("taskData", list.innerHTML);
}

function show() {
  if (localStorage.getItem("taskData")) {
    list.innerHTML = localStorage.getItem("taskData");
  }
}

show();
