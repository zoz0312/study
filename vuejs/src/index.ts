import { createApp } from 'vue';
import App from './App.vue';
import ReservationWaiting from '@store/tk.reservation.waiting/index';
import { InitData } from '@utils/initData';

const app = createApp(App);
app.use(ReservationWaiting);
app.mount('#app');

InitData( {
  doInit: (injectData: any) => {
    ReservationWaiting.commit('SET_SEAT_DATA', injectData);
    console.log('injectData', injectData);
  },
});
