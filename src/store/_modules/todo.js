import axios from 'axios';

import * as Mutations from '../mutations';
import * as Getters from '../getters';

let API_URL = process.env.VUE_APP_APIURL;
API_URL = `${API_URL}/api/todos`;

const state = {
  headerText: 'Todo LIST',
  todoItems: [],
};
const actions = {
  toggleTodoItem(context, payload) {
    let { id } = payload;
    axios
      .put(`${API_URL}/${id}`, payload)
      .then(res => res.data)
      .then(items => {
        context.commit('setTodoItems', items);
      });
  },
  removeAllTodoItems(context) {
    axios
      .delete(API_URL + '/')
      .then(res => res.data)
      .then(items => {
        context.commit('setTodoItems', items);
      });
  },
  addTodoItem(context, payload) {
    axios
      .post(API_URL + '/', payload)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .then(items => {
        context.commit('setTodoItems', items);
      });
  },
  loadTodoItems(context) {
    console.log(process.env);
    axios
      .get(API_URL)
      .then(res => res.data)
      .then(items => {
        console.log('load', items);
        context.commit('setTodoItems', items);
      });
  },
  removeTodoItem(context, payload) {
    let { id } = payload;
    axios
      .delete(API_URL + `/${id}`)
      .then(res => {
        //delete 된 후의 data 가 들어옴
        console.log('delete!', res.data);
        return res.data;
      })
      .then(items => {
        context.commit('setTodoItems', items);
      });
  },
};
const mutations = {
  ...Mutations,
};
const getters = {
  ...Getters,
};

export default { state, actions, mutations, getters };
