import axios from 'axios'

const state = {
    baseUrl: 'http://localhost:5000/api/ads',
    ads: {},
    adDetail: {},
    latestAds: {},
    popularAds: {},

};

const getters = {
    getAds: state => state.ads,
    getAdDetail: state => state.adDetail,
    getPopularAds: state => state.latestAds,
    getLatestAds: state  => state.popularAds


};

const actions = {
    getLatestAds: ({commit, state}, tag) => {
        axios.get(`${state.baseUrl}` + `?tags=${tag}`).then((response) => {
            console.log(response.data);

            commit('setLatestAds', response.data);
        }).catch(err => console.log(err));

    },

    getPopularAds: ({commit, state}, tag) => {
        axios.get(`${state.baseUrl}` + `?tags=${tag}`).then((response) => {
            console.log(response.data);

            commit('setLatestAds', response.data);
        }).catch(err => console.log(err));

    },

    getAllAds: ({commit, state}) => {
        axios.get(`${state.baseUrl}`).then((response) => {
            console.log(response.data.data);

            commit('setAllAds', response.data.data);
        }).catch(err => console.log(err));

    },

    getDetailAds: ({commit, state}, adId) => {
        axios.get(`${state.baseUrl}` + `/${adId}`).then((response) => {
            console.log(response.data);

            commit('setDetailAds', response.data);
        }).catch(err => console.log(err));

    },
};

const mutations = {
    setLatestAds: (state, ads) => {

        state.latestAds = ads;
    },

    setPopularAds: (state, ads) => {

        state.popularAds = ads;
    },

    setAllAds: (state, ads) => {
        state.ads = ads;
    },

    setDetailAds: (state, ads) => {
        state.adDetail = ads;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
