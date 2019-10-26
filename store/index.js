import Vue from "vue";
import Vuex from "vuex";

import defaultTable from "../table";
import {saveToLocalStorage} from '../src/helpers'

Vue.use(Vuex);
const table = JSON.parse(localStorage.getItem("table")) || defaultTable;

const store = new Vuex.Store({
  plugins: [saveToLocalStorage],
  state: {
    table
  },

  mutations: {}
});

//ACTIONS
//1. FETCH ALL tasks

export default store;
