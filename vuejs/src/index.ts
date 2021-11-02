import { createApp } from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
// import { useStore } from "vuex";
import ReservationWaiting from './store/tk.reservation.waiting/index';
import { InitData } from "./utils/InitData";

const app = createApp(App);
// app.use(Vuex);
app.use(ReservationWaiting);
app.mount('#app');

InitData( {
  doInit: (injectData: any) => {
    ReservationWaiting.commit('SET_SEAT_DATA', injectData);
    console.log('injectData', injectData);
  },
});
