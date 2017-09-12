import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    token: '',
};

const mutations = {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem('currentUser_token', token);
    },
    logout(state) {
        state.token = null;
        localStorage.clear();
    }
};

const getters = {
    getToken: state => {
        return state.token;
    }
};

const actions = {
};
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});