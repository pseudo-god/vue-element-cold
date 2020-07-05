import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'HomeIndex',
        component: () => import('@/views/home/index'),
        meta: { title: '主页', icon: 'menu', affix: true }
      }
    ]
  },
  {
    path: '/component',
    name: 'Component',
    component: Layout,
    meta: { title: '组件', icon: 'monitor' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table'),
        meta: { title: '表格', icon: 'monitor' }
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/tree'),
        meta: { title: '树', icon: 'monitor' }
      }
    ]
  },
  {
    path: '/doc',
    component: Layout,
    meta: { title: '文档', icon: 'monitor' },
    children: [
      {
        path: 'doc1',
        name: 'doc1',
        component: () => import('@/views/table'),
        meta: { title: '文档1', icon: 'monitor', affix: true }
      },
      {
        path: 'doc2',
        name: 'doc2',
        component: () => import('@/views/tree'),
        meta: { title: '文档2', icon: 'monitor', affix: true }
      }
    ]
  },
  {
    path: '/tab',
    component: Layout,
    meta: { title: 'tab', icon: 'monitor', affix: true },
    children: [
      {
        path: 'tab1',
        name: 'tab-one',
        component: () => import('@/views/tree'),
        meta: { title: 'tab11', icon: 'menu' }
      }
    ]
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
]

const router = new VueRouter({
  routes
})

export default router
