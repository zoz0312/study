import React from 'react';
import {DomRender} from '@utils/components/DomRender';
import {useRecoilState} from "recoil";
import {mainState} from "@store/pcweb/main/main.atom";
import { InitData } from "@utils/initData";
import { ChannelCondition } from "@utils/components/ChannelCondition";
import MainPC from "./main.pc";
import MainMOBILE from "./main.mobile";
import { channelState } from "@store/pcweb/channel.atom";
import '@i18n/i18n';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const [main, setMain] = useRecoilState(mainState);
  const [channel, setChannel] = useRecoilState(channelState);
  const { t } = useTranslation();

  InitData({
    doInit: (injectData) => {
      setMain(injectData.test);
      setChannel(injectData.channel);
      console.log('do22')
      // i18n.changeLanguage('ko');
    },
  });

  return (
    <div>
      Hello, Webpack!
      { ChannelCondition({
        channel,
        PC: MainPC,
        MOBILE: MainMOBILE,
      })}
      <div>
        <p>{ t('KRW') }</p>
        main: { main }
      </div>
    </div>
  );
}

DomRender(App);