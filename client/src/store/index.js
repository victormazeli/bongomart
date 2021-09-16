import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Ads from './modules/ads'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: Auth,
        ads: Ads

    }
});