import Vue from 'vue';
import Router from 'vue-router';

import LoginRouters from '../modules/login/login.router';
import LayoutRouters from '../modules/layout/layout.router';
import Module1Routers from '../modules/module1/module1.router';
import Module2Routers from '../modules/module2/module2.router';


Vue.use(Router);

const router = new Router({
  // mode: 'history',
  // hashbang:false,
  routes: [
    ...Module1Routers,
    ...Module2Routers,
    ...LoginRouters,
    ...LayoutRouters
  ]
});


function GlobalRouterPlugin() {}
GlobalRouterPlugin.install = function (Vue, options) { // eslint-disable-line
  Vue.getRouter = function () { // eslint-disable-line
    return router;// eslint-disable-line
  };// eslint-disable-line
  console.log(options);
};
Vue.use(GlobalRouterPlugin);
export default router;
