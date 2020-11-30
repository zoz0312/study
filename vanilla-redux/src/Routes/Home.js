import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('text', text);
    setText('')
  }
  return (
    <>
      <h1>TODO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Home;