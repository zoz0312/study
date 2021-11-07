import React from "react";
import ReactDOM from "react-dom";
import {
    RecoilRoot,
} from 'recoil';

export const DomRender = (Component: React.FC) => {
  ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <Component />
        </RecoilRoot>
    </React.StrictMode>,
  document.getElementById('root'));
}

