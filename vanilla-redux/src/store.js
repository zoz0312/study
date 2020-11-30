import { createStore } from 'redux';


const ADD = 'add';
const DELETE = 'delete';

const addTodo = text => {
  return {
    type: ADD,
    text
  }
}

const deleteTOdo = id => {
  return {
    type: DELETE,
    id
  }
}

const reducer = (state = [], { type, id, text }) => {
  switch (type) {
    case ADD:
      return [{ text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter(item => item.id !== id);
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe();

export default store;