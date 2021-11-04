import { createApp } from 'vue';
import Main from './Main.vue';
import ReservationWaiting from '@store/tk.reservation.waiting/index';
import { InitData } from '@utils/initData';

const app = createApp(Main);
app.use(ReservationWaiting);
app.mount('#app');

InitData( {
    doInit: (injectData: any) => {
        ReservationWaiting.commit('SET_SEAT_DATA', injectData);
        console.log('injectData', injectData);
    },
});
