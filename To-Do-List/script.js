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

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = (e) => {
        e.stopPropagation(); // Prevent li click event
        li.remove();
    };
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    input.value = ""; // Clear input field
}

// Optional: Listen for Delete key globally
document.addEventListener('keydown', function(event) {
    if (event.key === 'Delete') {
        // Code to execute when the Delete key is pressed
        console.log('Delete Button pressed');
        // Implement deleted functionality here
    }
});

