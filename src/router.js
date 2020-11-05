import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: "/home/home"
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/echs',
      name: 'echs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/lx/echs.vue')
    },
    {
      path: '/login/index',
      name: 'login/index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/login/index.vue')
    },
    {
      path: '/home/home',
      name: '/home/home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/home/home.vue'),
      redirect:"/home",
      children: [
        {
          path: "/home",
          name: "home",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/home/Home.vue'),
          meta: {
            title: "首页"
          },
        },
        {
          path: "/solid",
          name: "solid",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/home/Solid.vue'),
          meta: {
            title: "会员管理"
          },
        },
        {
          path: "/cooperation",
          name: "cooperation",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/home/Cooperation.vue'),
          meta: {
            title: "供应商管理"
          },
        },
        {
          path: "/goods",
          name: "goods",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/home/Goods.vue'),
          meta: {
            title: "商品管理"
          },
        },
        {
          path: "/user",
          name: "user",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/home/User.vue'),
          meta: {
            title: "员工管理"
          },
        },
        {
          path: "/yonghu",
          name: "yonghu",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/guan/yonghu.vue'),
          meta: {
            title: "用户管理"
          },
        },
        {
          path: "/shanjia",
          name: "shanjia",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/guan/shanjia.vue'),
          meta: {
            title: "商家",
            oAuth : true
          },
        },
        {
          path: "/shipin",
          name: "shipin",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/guan/shipin.vue'),
          meta: {
            title: "视频",
            oAuth : true
          },
        },
        {
          path: "/dingdan",
          name: "dingdan",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/guan/dingdan.vue'),
          meta: {
            title: "订单",
            oAuth : true
          },
        },
      ]
    },

  ]
})
