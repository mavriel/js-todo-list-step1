const dataStore = [];
const addTodo = (text) => {
  const todoItem = {
    text
  };
  dataStore.push(todoItem);
}

const todoInput = document.getElementById("new-todo-title");
const list = document.getElementById("todo-list");

const makeTodo = (item) => {
  const li = document.createElement('li');
  
  const content = document.createElement('div');
  content.className = "view";

  const checkBox = document.createElement('input');
  checkBox.className = "toggle";
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener('click', (event) => {
    item.complete = !item.complete;
    render();
  });

  const label = document.createElement('label');
  label.className = "label";
  label.innerHTML = item.text;

  const removeBtn = document.createElement('button');
  removeBtn.className = 'destroy';

  const editInput = document.createElement('input');
  editInput.className = 'edit';

  if (item.complete) {
    li.className = "completed";
    checkBox.setAttribute("checked", "");
  } 

  content.appendChild(checkBox);
  content.appendChild(label);
  content.appendChild(removeBtn);
  li.appendChild(content)
  li.appendChild(editInput);

  return li;
};

function inputNewTodo(event) {
  if (event.key === "Enter") {
    const inputValue = todoInput.value.trim();
    todoInput.value = "";
    if (inputValue === "") {
      return;
    }
    addTodo(inputValue);
    render();
  }
}

const render = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  };
  dataStore.forEach((item) => {
    list.insertBefore(makeTodo(item), list.firstChild);
  });
}

todoInput.addEventListener("keypress", inputNewTodo);
