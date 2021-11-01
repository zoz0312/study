import { createApp } from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
// import { useStore } from "vuex";
import ReservationWaiting from './store/tk.reservation.waiting/index';

const app = createApp(App);
// app.use(Vuex);
app.use(ReservationWaiting);
app.mount('#app');

declare global {
  interface Window {
    initData: (injectData: any) => void;
  }
}

window.initData = (function () {
  let flag = false;
  return function (injectData: any) {
    if (flag) {
      return;
    }
    flag = true;
    ReservationWaiting.commit('SET_SEAT_DATA', injectData);
    console.log('injectData', injectData);
  }
})();
