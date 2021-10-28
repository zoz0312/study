import { createApp } from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { store } from './store/tk.main';

const app = createApp(App);
app.use(Vuex);
app.use(store);
app.mount('#app');

window.tk = {};
window.tk.main = (function () {
  const data = {};
  return {
    init: function (injectData) {
      console.log('injectData', injectData);
    }
  };
})();
