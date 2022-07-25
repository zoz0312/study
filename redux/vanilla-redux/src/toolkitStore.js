import { createStore } from 'redux';
import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// const addTodo = createAction('add');
// const deleteTodo = createAction('delete');

// const reducer = createReducer([], {
//   [addTodo]: (state, action) => {
//     // only mutate
//     state.push({ text: action.payload, id: Date.now() })
//   },
//   [deleteTodo]: (state, action) => {
//     // new state
//     return state.filter(item => item.id !== action.payload);
//   },
// })

const todo = createSlice({
  name: 'todoReducer',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() })
    },
    deleteTodo: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  }
})

// const store = createStore(reducer);
const store = configureStore({ reducer: todo.reducer }); // using for Redux Developer tools

export const {
  addTodo,
  deleteTodo,
} = todo.actions;

export default store;