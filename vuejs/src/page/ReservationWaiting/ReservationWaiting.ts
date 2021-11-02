import { createApp } from 'vue';
import ReservationWaitingVue from './ReservationWaiting.vue';
import ReservationWaitingStore from '@store/tk.reservation.waiting/index';
import { InitData } from '@utils/initData';

const app = createApp(ReservationWaitingVue);
app.use(ReservationWaitingStore);
app.mount('#app');

InitData( {
  doInit: (injectData: any) => {
    ReservationWaitingStore.commit('SET_SEAT_DATA', injectData);
    console.log('tk.reservation.waiting', injectData);
  },
});