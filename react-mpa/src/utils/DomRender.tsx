import React from "react";
import ReactDOM from "react-dom";
import {
    RecoilRoot,
} from 'recoil';
import '@i18n/i18n';

export const DomRender = (Component: React.FC) => {
  ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <Component />
        </RecoilRoot>
    </React.StrictMode>,
  document.getElementById('root'));
}

