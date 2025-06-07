function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle completed on click
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
        input.value = ""; // Clear input field
        input.focus(); // Focus back on input field
    });

    document.getElementById("taskList").appendChild(li);
}

// Add delete button

document.addEventListener('keydown', function(event) {
    if (event.key === 'Delete') {
        // Code to execute when the Delete key is pressed
        console.log('Delete Button pressed');
        // Implement deleted functionality here
    }
});

const deleteButton = document.createElement("button");
deleteButton.textContent = "";
