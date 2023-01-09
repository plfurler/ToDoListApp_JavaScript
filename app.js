{
    const toDoListForm = document.querySelector('form');

    toDoListForm
        .addEventListener("submit", function (e) {
            // Prevent this form from submitting, which is the default behaviour
            e.preventDefault();

            // Get the required elements from the DOM
            const toDoListInput = toDoListForm.querySelector('input');
            const toDoList = document.getElementById('toDoList');
            const p = document.querySelector('div').querySelector('p');

            // Check if the input is not empty
            if (typeof toDoListInput.value === "string" && toDoListInput.value.trim().length !== 0) {
                // Clear error message
                p.innerHTML = '&nbsp;';

                // Create a list item element
                let toDoListItem = document.createElement('li');

                // Add the text from user to the list item
                toDoListItem.innerHTML = toDoListInput.value + '&nbsp;';

                // Append list item to the to the do list
                toDoList.appendChild(toDoListItem);

                // Create the remove button
                let removeButton = document.createElement('button');
                removeButton.setAttribute("type", "button");
                removeButton.innerHTML = "Remove";
                removeButton.addEventListener("click", function () {
                    let listItemElement = removeButton.parentElement;
                    listItemElement.parentElement.removeChild(listItemElement);
                })

                //Append remove button to the list item
                toDoListItem.appendChild(removeButton);
            }

            else {
                p.innerHTML = '(Empty input)';
                p.style.fontWeight = 'bold';
                p.style.color = 'red';
            }

            // Clear the text in the input box
            toDoListInput.value = null;

            // Apply focus back to the input box
            toDoListInput.focus();

        });
}