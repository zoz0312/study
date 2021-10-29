import { createApp } from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { useStore } from "vuex";
import ReservationWaiting from './store/tk.reservation.waiting/index';

const app = createApp(App);
app.use(Vuex);
// app.use(store);
app.use(ReservationWaiting);
app.mount('#app');


window.tk = {};
window.tk.main = (function () {
  const data = {};
  return {
    init: function (injectData) {
      ReservationWaiting.commit('SET_SEAT_DATA', injectData);
      console.log('injectData', injectData);
    }
  };
})();
