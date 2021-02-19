import axios from 'axios';
//상태변수
let API_URL = process.env.VUE_APP_APIURL;
API_URL = `${API_URL}/api/posts`;

const state = {
  posts: [],
  post: {},
};

const actions = {
  loadPosts(context) {
    axios
      .get(API_URL)
      .then(res => res.data)
      .then(items => {
        console.log('load', items);
        context.commit('setPosts', items);
      });
  },
  loadPost(context, payload) {
    axios
      .get(`${API_URL}/${payload.id}`)
      .then(res => {
        return res.data;
      })
      .then(item => context.commit('setPost', item))
      .catch(error => console.error(error));
  },
  addPost(context, payload) {
    console.log('payload : ', payload);
    axios
      .post(`${API_URL}`, payload)
      .then(res => res.data)
      .then(items => context.commit('setPosts', items))
      .catch(error => console.error(error));
  },
  removePost(context, id) {
    axios
      .delete(`${API_URL}/${id}`)
      .then(res => res.data)
      .then(items => context.commit('setPosts', items))
      .catch(error => console.error(error));
  },
};
const mutations = {
  setPosts(state, items) {
    state.posts = items;
  },
  setPost(state, item) {
    state.post = item;
  },
};
const getters = {
  getPosts(state) {
    return state.posts;
  },
  getPost(state) {
    return state.post;
  },
};

export default { state, actions, mutations, getters };
