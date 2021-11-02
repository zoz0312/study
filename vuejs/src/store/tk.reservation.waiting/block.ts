console.log('block');
export const block: any = {
  state: () => ({
    count: 0
  }),
  mutations: {
    increment(state: any) {
      state.count++;
    }
  },
  getters: {
    doubleCount(state: any, getters: any, rootState: any) {
      return state.count * 2;
    }
  },
  actions: {
    incrementIfOddOnRootSum(state: any, commit: any, rootState: any) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit("increment");
      }
    }
  }
};