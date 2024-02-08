import { createStore } from "vuex";
import { crm } from "@/store/crm.module.js";

const store = createStore({
  modules: {
    crm,
  },
});

export default store;