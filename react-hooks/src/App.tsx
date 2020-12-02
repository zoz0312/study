import React, { useEffect, useRef, useState } from 'react';

const usePreventLeave = () => {
  const listener = (event: Event) => {
    event.preventDefault();
    event.returnValue = false;
  }
  const enablePrevent = () =>
    window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);

  return { enablePrevent, disablePrevent }
}

const App: React.FC = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <div>hi</div>
      <button onClick={enablePrevent}>En</button>
      <button onClick={disablePrevent}>Dis</button>
    </div>
  );
};
export default App;
