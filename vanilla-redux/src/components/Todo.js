import React from 'react';
import { actionCreators } from '../store';
import { connect } from 'react-redux';

const Todo = ({ text, onClick }) => {
  return (
    <li>
      { text }<button onClick={onClick}>X</button>
    </li>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(Todo);