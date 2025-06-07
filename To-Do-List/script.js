function addTask() {
const input = document.getElementById("taskInput");
const tastText = input.ariaValueMax.trim();

if (tastText === "") return;

const li =document.getElementById("li");
li.textContent = taskText;
const li = document.createElement("li");
li.textContent = taskText;
}