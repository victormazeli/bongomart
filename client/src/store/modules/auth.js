import firebase from "firebase";

const state = {
    token: null,
    baseUrl: 'http://localhost:5000/api/auth',
    currentUser: {}

};

const getters = {
    isLoggedIn: state => !!state.token,

    currentUser: state => state.currentUser,
    
};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);

    },

    register: ({ commit, state}, email, password, name) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(data => data.user.getIdToken(true)
            .then(idtoken => {
                this.$http.post(`${state.baseUrl}` + '/register', {authToken: idtoken}).then((response) => {
                    commit('setToken', response.data);
                    console.log(response.data);

                    this.$http.get(`${state.baseUrl}` + '/me').then((response) => {
                        console.log(response.data);
                        commit('setCurrentUser', response.data);
    
                    }).catch(err => console.log(err))
                })
            })
            .catch(err => console.log(err))
            )
            .catch(err =>{
                console.log(err);
            });

    },

    login: ({commit, state }, email, password) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => data.user.getIdToken(true)
        .then(idToken => {
            this.$http.post(`${state.baseUrl}` + '/login', {authToken: idToken}).then((response) => {
                commit('setToken', response.data);
                console.log(response.data);

                this.$http.get(`${state.baseUrl}` + '/me').then((response) => {
                    console.log(response.data);
                    commit('setCurrentUser', response.data);

                }).catch(err => console.log(err))

            })
        })
        .catch(err => console.log(err))
        )
        .catch(err => console.log(err))
    },

    
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },

    setCurrentUser: (state, data) => {
        state.currentUser = data;

    }
    
};

export default {
    state,
    getters,
    actions,
    mutations
}