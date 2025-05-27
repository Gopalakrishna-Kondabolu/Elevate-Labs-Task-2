document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
  const input = document.getElementById('task');
  const taskText = input.value.trim();

  if (taskText === '') return; 

  const li = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.addEventListener('click', () => {
    taskSpan.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
