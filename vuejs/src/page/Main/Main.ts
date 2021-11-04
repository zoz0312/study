import { createApp } from 'vue';
import Main from './Main.vue';
import MainStore from '@store/main/main.index';
import { InitData } from '@utils/initData';

const app = createApp(Main);
app.use(MainStore);
app.mount('#app');

InitData( {
    doInit: (injectData: any) => {
        MainStore.commit('SET_SEAT_DATA', injectData);
    },
});
