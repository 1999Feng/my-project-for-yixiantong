import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/pages/Index';
import List from '@/pages/List';
import Detail from '@/pages/Detail';
import City from '@/pages/City';
import Search from '@/pages/Search';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
});
