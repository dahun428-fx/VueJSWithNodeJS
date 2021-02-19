import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import todo from './_modules/todo';
import post from './_modules/post';

//Vuex 미들웨어 사용
Vue.use(Vuex);
Vue.use(VueAxios, axios);

// const storage = {
//   fetch() {
//     const arr = [];
//     if (localStorage.length > 0) {
//       for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
//           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//         }
//       }
//     }
//     return arr;
//   },
// };

export const store = new Vuex.Store({
  modules: {
    todo,
    post,
  },
});
