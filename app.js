const toDoListForm = document.forms[0];

toDoListForm
    .addEventListener("submit", function (e) {
        // Get required elements from the DOM
        let toDoListInput = toDoListForm.elements['toDo'];
        let toDoList = document.getElementById('toDoList');


        // Prevent the form from submitting, which is the default behaviour
        e.preventDefault();

        // Create a list item element
        let toDoListItem = document.createElement('li');

        // Add the text from user to the list item
        toDoListItem.innerHTML = toDoListInput.value;

        // Append list item to the to do list
        toDoList.appendChild(toDoListItem);

        // Clear the text in the input box
        toDoListInput.value = null;

        // Apply focus back to input box
        toDoListInput.focus();

    });