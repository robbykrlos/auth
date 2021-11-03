import router from '@enso-ui/ui/src/core/services/router';

export const state = {
    isAuth: localStorage.getItem('isAuth') === 'true',
    intendedRoute: null,
    intendedPath: null,
};

export const mutations = {
    login(state) {
        state.isAuth = true;
        localStorage.setItem('isAuth', true);
    },
    logout(state) {
        state.isAuth = false;
        localStorage.setItem('isAuth', false);
        localStorage.removeItem('authorization');
    },
    setIntendedRoute: (state, value) => (state.intendedRoute = value),
    setIntendedPath: (state, value) => (state.intendedPath = value),
};

export const actions = {
    logout({ commit }) {
        axios.post('/api/logout').then(() => {
            commit('appState', false, { root: true });
            commit('logout');
            router.push({ name: 'login' });
        });
    },
};
