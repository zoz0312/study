import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addTodo = createAction('add');
const deleteTodo = createAction('delete');


const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    // only mutate
    state.push({ text: action.payload, id: Date.now() })
  },
  [deleteTodo]: (state, action) => {
    // new state
    return state.filter(item => item.id !== action.payload);
  },
})

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;