import React from 'react';
import {DomRender} from '@utils/DomRender';
import {useRecoilState} from "recoil";
import {mainState} from "@store/pcweb/main/main.atom";

const App: React.FC = () => {
  const [main, setMain] = useRecoilState(mainState);

  return (
    <div>
      Hello, Webpack!
      { main.map(val => (
        <div>
          {{ val }}
        </div>
      )) }
    </div>
  );
}

DomRender(App);