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
      group:['article']
    },
    children: [{
      path: 'vueAdd',
      component: () => import('@/views/article/vue/add'),
      name: 'vueAdd',
      meta: {
        title: 'vueAdd'
      }
    }, {
      path: 'vueManage',
      component: () => import('@/views/article/vue/manage'),
      name: 'vueManage',
      meta: {
        title: 'vueManage'
      }
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
      group:['article']
    },
    children: [{
      path: 'angularAdd',
      component: () => import('@/views/article/angular/add'),
      name: 'angularAdd',
      meta: {
        title: 'angularAdd'
      }
    }, {
      path: 'manage',
      component: () => import('@/views/article/angular/manage'),
      name: 'angularManage',
      meta: {
        title: 'angularManage'
      }
    }]
  }
]

export default articleRouterMap
