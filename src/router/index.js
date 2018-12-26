import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import portfolioItem from '@/components/portfolioItem';
import about from '@/components/about';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/portfolioItem',
      name: 'portfolioItem',
      component: portfolioItem
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
  ]
});
