import Vue from 'vue';
import Vuex from 'vuex';
import { SOME_MUTATION } from './vuex/mutations-types'
import { Istate } from '@/vuex/stateInterface'

Vue.use(Vuex);



export default new Vuex.Store({
    state: {
        name: ''
    },
    mutations: {
        setUsrData(state: Istate, data) {
            state.name = data.payload.name
        },
    },
    actions: {
        setUsrData(context, contextData) {
            context.commit('setUsrData', contextData)
        }
    },
});
