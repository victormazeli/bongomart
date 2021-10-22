import firebase from "firebase";
import axios from "axios";

const state = {
    token: null,
    baseUrl: 'http://localhost:7000/api/auth',
    currentUser: {}

};

const getters = {
    isLoggedIn: state => !!state.token,

    currentUser: state => state.currentUser,
    
};

const actions = {
    logout: ({ commit }) => {
        firebase.auth().signOut();
        commit('setToken', null);

    },

    register: ({ commit, state}, {email, password}) => {
        console.log(email);
        console.log(password);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(data => data.user.getIdToken(true)
            .then(idtoken => {
                axios.post(`${state.baseUrl}` + '/register', {authToken: idtoken}).then((response) => {
                    commit('setToken', response.data.token);
                    console.log(response.data);

                    axios.get(`${state.baseUrl}` + '/me', {
                        headers: {
                            'authorization': `Bearer ${state.token}`
                        }
                    }).then((response) => {
                        console.log(response.data.data);
                        commit('setCurrentUser', response.data.data);
    
                    }).catch(err => console.log(err))
                })
            })
            .catch(err => console.log(err))
            )
            .catch(err =>{
                console.log(err);
            });

    },

    login: ({commit, state }, {email, password}) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => data.user.getIdToken(true)
        .then(idToken => {
            axios.post(`${state.baseUrl}` + '/login', {authToken: idToken}).then((response) => {
                commit('setToken', response.data.token);
                console.log(response.data);

                axios.get(`${state.baseUrl}` + '/me', {
                    headers: {
                        'authorization': `Bearer ${state.token}`
                    }
                }).then((response) => {
                    console.log(response.data.data);
                    commit('setCurrentUser', response.data.data);

                }).catch(err => console.log(err))

            })
        })
        .catch(err => console.log(err))
        )
        .catch(err => console.log(err))
    },
    facebookLogin: ({commit, state }) => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(data => data.user.getIdToken(true)
        .then(idToken => {
            axios.post(`${state.baseUrl}` + '/login', {authToken: idToken}).then((response) => {
                commit('setToken', response.data.token);
                console.log(response.data);

                axios.get(`${state.baseUrl}` + '/me', {
                    headers: {
                        'authorization': `Bearer ${state.token}`
                    }
                }).then((response) => {
                    console.log(response.data.data);
                    commit('setCurrentUser', response.data.data);

                }).catch(err => console.log(err))

            })
        })
        .catch(err => console.log(err))
        )
        .catch(err => console.log(err))
    },
    googleLogin: ({commit, state }) => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(data => data.user.getIdToken(true)
        .then(idToken => {
            axios.post(`${state.baseUrl}` + '/login', {authToken: idToken}).then((response) => {
                commit('setToken', response.data.token);
                console.log(response.data.token);

                axios.get(`${state.baseUrl}` + '/me', {
                    headers: {
                        'authorization': `Bearer ${state.token}`
                    }
                }).then((response) => {
                    console.log(response.data.data);
                    commit('setCurrentUser', response.data.data);

                }).catch(err => console.log(err))

            })
        })
        .catch(err => console.log(err))
        )
        .catch(err => console.log(err))
    },
    googleSignUp: ({commit, state }) => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(data => data.user.getIdToken(true)
        .then(idToken => {
            axios.post(`${state.baseUrl}` + '/register', {authToken: idToken}).then((response) => {
                commit('setToken', response.data.token);
                console.log(response.data);

                axios.get(`${state.baseUrl}` + '/me', {
                    headers: {
                        'authorization': `Bearer ${state.token}`
                    }
                }).then((response) => {
                    console.log(response.data.data);
                    commit('setCurrentUser', response.data.data);

                }).catch(err => console.log(err))

            })
        })
        .catch(err => console.log(err))
        )
        .catch(err => console.log(err))
    },
    facebookSignUp: ({commit, state }) => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(data => data.user.getIdToken(true)
        .then(idToken => {
            axios.post(`${state.baseUrl}` + '/register', {authToken: idToken}).then((response) => {
                commit('setToken', response.data.token);
                console.log(response.data);

                axios.get(`${state.baseUrl}` + '/me', {
                    headers: {
                        'authorization': `Bearer ${state.token}`
                    }
                }).then((response) => {
                    console.log(response.data.data);
                    commit('setCurrentUser', response.data.data);

                }).catch(err => console.log(err))

            })
        })
        .catch(err => console.log(err))
        )
        .catch(err => console.log(err))
    },

    // resetPassword: ({}, email) => {
    //     firebase.auth().sendPasswordResetEmail()

    // }

    
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