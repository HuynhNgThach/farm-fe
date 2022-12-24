import { useLocalStorage } from "vue-composable";
import { STORAGE } from "../../constants";
import { useTheme } from "vuetify";
const state = () => {
  return {
    theme: "dark",
  };
};
const mutations = {
  CHANGE_THEME(state, name) {
    state.theme = name;
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
};
const getters = {
  getTheme(state) {
    return state.theme;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
