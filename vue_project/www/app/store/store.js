import Vue from "vue";
import Vuex from "vuex";
import createLogger from 'vuex/dist/logger'
 
import kubiaodan_actions from "./kubiaodan/actions.js";
import kubiaodan_mutations from "./kubiaodan/mutations.js";
import kubiaodan_state from "./kubiaodan/state.js";
import filtercar_actions from "./filtercar/actions.js";
import filtercar_mutations from "./filtercar/mutations.js";
import filtercar_state from "./filtercar/state.js";

export default {
    state : {
        kubiaodan: kubiaodan_state,
        filtercar: filtercar_state
    },
    mutations: {
        ...kubiaodan_mutations,
        ...filtercar_mutations
    },
    actions: {
        ...kubiaodan_actions,
        ...filtercar_actions,
    },
    plugins: [createLogger()]
};