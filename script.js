document.getElementById('addButton').addEventListener('click', function(){
    const taskInput = document.getElementById('taskInput');
    const taskTest = taskInput.value.trim();

    if(taskTest !== ""){
        const li = document.createElement('li');
        li.textContent = taskTest;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function(){
            li.remove();
        });

        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = "";
    }
});