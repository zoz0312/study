import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('add');
const deleteTodo = createAction('delete');

const reducer = (state = [], { type, id, text }) => {
  switch (type) {
    case addTodo.type:
      return [{ text, id: Date.now() }, ...state];
    case deleteTodo.type:
      return state.filter(item => item.id !== id);
    default:
      return state;
  }
}

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;