import Vue from "vue";
import Vuex from "vuex";

import defaultTable from "../table";
import { saveToLocalStorage } from "../src/helpers";

Vue.use(Vuex);
const table = JSON.parse(localStorage.getItem("table")) || defaultTable;

const store = new Vuex.Store({
  state: {
    table
  },
  mutations: {
    SET_TABLES(state, payload) {
      state.table = payload.columns;
      state.table.column.forEach(task => task);
    }
  },
  actions: {
    setTable({ commit }, payload) {
      commit("SET_TABLES", payload);
    }
  },
  plugins: [saveToLocalStorage]
});

export default store;
