document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        addItem();
    });
});

function addItem() {
    // Get the value of the input box
    let taskInput = document.getElementById('box');
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new list item
    let li = document.createElement('li');
    li.textContent = task;

    // Add a delete button to each list item
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteButton);

    // Append the new list item to the list
    document.querySelector('#listItem ul').appendChild(li);

    // Clear the input box
    taskInput.value = "";
}





