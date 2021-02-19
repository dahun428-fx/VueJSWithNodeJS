import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/HOME.vue';
import Posts from '../views/Posts.vue';
import PostNew from '../views/PostNew.vue';
import PostDetail from '../views/PostDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //-->lazy load 를 하고 싶을 때
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
    children: [
      { path: 'new', component: PostNew },
      { path: ':id', name: 'post', component: PostDetail },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
