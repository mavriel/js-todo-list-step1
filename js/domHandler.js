const todoInput = document.getElementById("new-todo-title");
const list = document.getElementById("todo-list");

let index = 0;

const getId = (index) => `todo-${index}`;

const makeTodo = (text) => {
  const currIndex = index;
  index++;
  return `
<li id="${getId(currIndex)}">
  <div class="view">
    <input class="toggle" type="checkbox" onchange="toggle(${currIndex})"/>
    <label class="label">${text}</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="새로운 타이틀" />
</li>`;
};

function inputNewTodo(event) {
  if (event.key === "Enter") {
    const inputValue = todoInput.value.trim();
    todoInput.value = "";
    if (inputValue === "") {
      return;
    }
    const todo = makeTodo(inputValue);
    list.innerHTML = `${todo}${list.innerHTML}`;
  }
}

const STATUS_COMPLETE = "completed";
const toggleClassName = (curr) => {
  if (curr === STATUS_COMPLETE) {
    return undefined;
  }
  return STATUS_COMPLETE;
};

const setCheckBox = (el) => {
  const isChecked = el.className === STATUS_COMPLETE;

  console.log(el.getElementsByClassName("toggle"));

  const checkBox = el.getElementsByClassName("toggle")[0];
  if (isChecked) {
    checkBox.setAttribute("checked", "");
  } else {
    checkBox.removeAttribute("checked");
  }
};

function toggle(todoIndex) {
  const todoItem = document.getElementById(getId(todoIndex));
  todoItem.className = toggleClassName(todoItem.className);
  setCheckBox(todoItem);
}

todoInput.addEventListener("keypress", inputNewTodo);
