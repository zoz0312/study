import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const Detail = ({ todo }) => {
  const id = useParams();

  return (
    <>
      <h1>{ todo?.text }</h1>
      <h5>Created { Date(todo?.id) }</h5>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { match: { params: { id } } } = ownProps;
  return { todo: state.find(item => item.id === parseInt(id)) };
}
export default connect(mapStateToProps)(Detail);