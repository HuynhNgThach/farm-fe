import { isClient, useLocalStorage } from "vue-composable";
import { STORAGE } from "../../constants";
const state = () => {
  return {
    theme: "dark",
    menuCollpase: false,
  };
};
const mutations = {
  CHANGE_THEME(state, name) {
    state.theme = name;
  },
  CHANGE_MENU_COLLAPSE(state, isCollpase) {
    state.menuCollpase = isCollpase;
  },
};
const actions = {
  doChangeTheme({ commit }, name) {
    if (["dark", "light"].includes(name)) {
      const themeStorage = useLocalStorage(STORAGE.FARM_THEME, "dark", true);
      themeStorage.storage.value = name;
      commit("CHANGE_THEME", name);
    }
  },
  doInit({ commit }) {
    const themeStorage = useLocalStorage(STORAGE.FARM_THEME, "dark", true);
    console.log("from init ", themeStorage.storage.value);
    commit("CHANGE_THEME", themeStorage.storage.value);
  },
  doChangeMenuCollapse({ commit }, isCollpase) {
    commit("CHANGE_MENU_COLLAPSE", isCollpase);
  },
};
const getters = {
  getTheme(state) {
    return state.theme;
  },
  getMenuCollpase(state) {
    return state.menuCollpase;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
