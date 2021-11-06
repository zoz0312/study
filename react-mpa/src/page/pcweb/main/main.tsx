import React from 'react';
import {DomRender} from '@utils/DomRender';
import {useRecoilState} from "recoil";
import {mainState} from "@store/pcweb/main/main.atom";
import { InitData } from "@utils/initData";

const App: React.FC = () => {
  const [main, setMain] = useRecoilState(mainState);

  InitData({
    doInit: (injectData) => {
      setMain(injectData.test);
      console.log('do')
    },
  });

  return (
    <div>
      Hello, Webpack!
      <div>
        main: { main }
      </div>
    </div>
  );
}

DomRender(App);