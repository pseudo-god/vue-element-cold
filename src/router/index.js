import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: { title: '首页', icon: 'menu', affix: true }
  },
  {
    path: '/component',
    name: 'Component',
    component: Layout,
    meta: { title: '组件', icon: 'monitor', affix: true },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table'),
        meta: { title: '表格', icon: 'monitor', affix: true }
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/tree'),
        meta: { title: '树', icon: 'monitor', affix: true }
      }
    ]
  },
  {
    path: '/tab',
    name: 'tab',
    component: Layout,
    meta: { title: 'TAB', icon: 'monitor', affix: true }
    // children:[
    //   {
    //     path: "tab1",
    //     name: "Tab1",
    //     component: () => import("@/views/tree"),
    //     meta: { title: "TAB11", icon: "monitor", affix: true },
    //   }
    // ]
  }
  // {
  //   path: "/tab",
  //   name: "tab",
  //   component: Home,
  //   children: [
  //     {
  //       path: "/home2",
  //       name: "tab-1",
  //       component: Home2,
  //       children: [
  //         {
  //           path: "home2---1",
  //           name: "tab-1--1",
  //           component: Home2,
  //         },
  //       ],
  //     },
  //     {
  //       path: "home2",
  //       name: "tab-2",
  //       component: Home2,
  //     },
  //     {
  //       path: "home2",
  //       name: "tab-3",
  //       component: Home2,
  //     },
  //   ],
  // },
];

const router = new VueRouter({
  routes
});

export default router;
