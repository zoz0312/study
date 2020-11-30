import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../toolkitStore';
import Todo from '../components/Todo';

const Home = ({ todo, addTodo }) => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('')
  }
  return (
    <>
      <h1>TODO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Submit</button>
      </form>
      <ul>{ todo.map((item) => <Todo key={item.id} {...item} />) }</ul>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);