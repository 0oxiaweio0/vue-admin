import Layout from '@/views/layout/Layout'

const articleRouterMap=[
  /*vue类型文章管理*/
  {
    path: '/vue',
    component: Layout,
    redirect: '/vue/vueAdd',
    alwaysShow: true,
    meta: {
      title: 'vue',
      icon: 'vuejs',
      group:'article'
    },
    children: [{
      path: 'vueAdd',
      component: () => import('@/views/article/vue/add'),
      name: 'vueAdd',
      meta: {
        title: 'vueAdd',
        group:'article'
      }
    }, {
      path: 'vueManage',
      component: () => import('@/views/article/vue/manage'),
      name: 'vueManage',
      meta: {
        title: 'vueManage',
        group:'article'
      }
    }, {
      path: 'vueEdit/:id(\\d+)',
      component: () => import('@/views/article/vue/edit'),
      name: 'vueEdit',
      meta: {
        title: 'vueEdit',
        group:'article'
      },
      hidden: true
    }]
  },
  /*angular类型文章管理*/
  {
    path:'/angular',
    component: Layout,
    redirect: '/angular/add',
    meta: {
      title: 'angular',
      icon: 'angular',
      group:'article'
    },
    children: [{
      path: 'angularAdd',
      component: () => import('@/views/article/angular/add'),
      name: 'angularAdd',
      meta: {
        title: 'angularAdd',
        group:'article'
      }
    }, {
      path: 'manage',
      component: () => import('@/views/article/angular/manage'),
      name: 'angularManage',
      meta: {
        title: 'angularManage',
        group:'article'
      }
    }]
  }
]

export default articleRouterMap
