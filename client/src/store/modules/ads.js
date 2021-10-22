import axios from 'axios'

const state = {
    baseUrl: 'http://localhost:7000/api/ads',
    ads: {},
    adDetail: {},
    latestAds: {},
    popularAds: {},
    categories: [],

};

const getters = {
    getAds: state => state.ads,
    getAdDetail: state => state.adDetail,
    getPopularAds: state => state.latestAds,
    getLatestAds: state  => state.popularAds,
    getCategories: state => state.categories,
  


};

const actions = {
    getLatestAds: ({commit, state}, tag) => {
        axios.get(`${state.baseUrl}` + `?tags=${tag}`).then((response) => {
            console.log(response.data.data);

            commit('setLatestAds', response.data.data);
        }).catch(err => console.log(err));

    },

    getPopularAds: ({commit, state}, tag) => {
        axios.get(`${state.baseUrl}` + `?tags=${tag}`).then((response) => {
            console.log(response.data.data);

            commit('setLatestAds', response.data.data);
        }).catch(err => console.log(err));

    },
    getAdsByCategory: ({commit, state}, catId) => {
        axios.get(`${state.baseUrl}` + `?category=${catId}`).then((response) => {
            console.log(response.data.data);

            commit('setLatestAds', response.data.data);
        }).catch(err => console.log(err));

    },

    getAllAds: ({commit, state}, {page, catId, title, price, condition}) => {
        if (catId && catId !==null) {
            axios.get(`${state.baseUrl}` + `?page=${page}` + `&category=${catId}`).then((response) => {
                console.log(response.data.data);
    
                commit('setAllAds', response.data.data);
            }).catch(err => console.log(err));
            
        }
        if (title && title !==null) {
            axios.get(`${state.baseUrl}` + `?page=${page}` + `&title=${title}`).then((response) => {
                console.log(response.data.data);
    
                commit('setAllAds', response.data.data);
            }).catch(err => console.log(err));
            
        }
        if (price && price !==null) {
            axios.get(`${state.baseUrl}` + `?page=${page}` + `&price=${price}`).then((response) => {
                console.log(response.data.data);
    
                commit('setAllAds', response.data.data);
            }).catch(err => console.log(err));
            
        }
        if (condition && condition !==null) {
            axios.get(`${state.baseUrl}` + `?page=${page}` + `&condition=${condition}`).then((response) => {
                console.log(response.data.data);
    
                commit('setAllAds', response.data.data);
            }).catch(err => console.log(err));

        }
        else{
            axios.get(`${state.baseUrl}` + `?page=${page}`).then((response) => {
                console.log(response.data.data);
    
                commit('setAllAds', response.data.data);
            }).catch(err => console.log(err));
        }

    },
    getAllCategories: ({commit, state}) => {
        axios.get(`${state.baseUrl}` + `/category`).then((response) => {
            console.log(response.data.data);

            commit('setCategories', response.data.data);
        }).catch(err => console.log(err));

    },

    getDetailAds: ({commit, state}, adId) => {
        axios.get(`${state.baseUrl}` + `/detailAd` + `/${adId}`).then((response) => {
            console.log(response.data.data);

            commit('setDetailAds', response.data.data);
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
    },
    setCategories: (state, categories) => {
        state.categories = categories;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
