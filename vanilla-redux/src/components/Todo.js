import React from 'react';
import { actionCreators } from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Todo = ({ text, id, onClick }) => {
  return (
    <li>
      <Link to={`/${id}`}>{ text }</Link>
      <button onClick={onClick}>X</button>
    </li>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(Todo);