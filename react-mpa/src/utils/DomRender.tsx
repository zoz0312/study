import React from "react";
import ReactDOM from "react-dom";

export const DomRender = (Component: React.FC) => {
  ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
  document.getElementById('root'));
}

