import { createStore } from "vuex";
import { block } from './block';
import { seat } from './seat';

export default createStore({
  modules: { block, seat }
});
