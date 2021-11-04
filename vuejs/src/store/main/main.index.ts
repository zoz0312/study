import { createStore } from "vuex";
import cloneDeep from "clone-deep";


const state = {
    seat: {},
};

const getters = {
    doubleCount2(state: any, getters: any, rootState: any) {
        return state.count * 2;
    },
};

const mutations = {
    SET_SEAT_DATA(state: any, value: any) {
        state.seat = cloneDeep(value);
    }
};

const actions = {
    incrementIfOddOnRootSum2(state: any, commit: any, rootState: any) {
        if ((state.count + rootState.count) % 2 === 1) {
            commit("increment");
        }
    }
};

export const mainStore: any = {
    state: () => (state),
    mutations,
    getters,
    actions,
};

export default createStore(mainStore);
