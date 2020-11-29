import { bindActionCreators, createStore } from 'redux';

const plus = document.getElementById('plus');
const minus = document.getElementById('minus')
const number = document.querySelector('span');

// let count = 0;

const PLUS = 'plus';
const MINUS = 'minus';

const reducer = (count = 0, { type }) => {
  switch (type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(reducer);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange)

plus.addEventListener('click', () => {
  countStore.dispatch({ type: PLUS })
});

minus.addEventListener('click', () => {
  countStore.dispatch({ type: MINUS })
});


//====================================


const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_ITEM = 'add_todo';
const DELETE_ITEM = 'delete_todo';

const todoReducer = (state = [], { type, text = '', id }) => {
  switch (type) {
    case ADD_ITEM:
      return [...state, { text, id: Date.now() }];
    case DELETE_ITEM:
      return state.filter(item => item.id !== id);
    default:
      return state;
  }
}

const todoStore = createStore(todoReducer);

const addTodo = text => {
  todoStore.dispatch({ type: ADD_ITEM, text });
}

const deleteTodo = (e) => {
  const id = e.target.parentNode.id;
  todoStore.dispatch({ type: DELETE_ITEM, id: +id });
}

const paintTodos = () => {
  const todos = todoStore.getState();
  ul.innerHTML = '';
  todos.forEach(item => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'x';
    btn.addEventListener('click', deleteTodo);
    li.id = item.id;
    li.innerText = item.text;
    li.appendChild(btn);
    ul.appendChild(li)
  })
}

todoStore.subscribe(paintTodos);

const onSubmit = e => {
  e.preventDefault();
  const todo = input.value;
  if (todo === '') return;
  input.value = '';
  addTodo(todo);
}

form.addEventListener('submit', onSubmit);