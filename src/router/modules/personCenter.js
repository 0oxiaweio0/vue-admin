import Layout from '@/views/layout/Layout'

const personCenterRouterMap=[
  /*基本信息*/
  {
    path: '/my',
    component: Layout,
    redirect: '/my/info',
    alwaysShow: true,
    meta: {
      title: 'my',
      icon: 'user',
      roles: ['admin', 'editor']
    },
    children: [{
      path: 'info',
      component: () => import('@/views/personCenter/userInfo/info'),
      name: 'myInfo',
      meta: {
        title: 'myInfo'
      }
    }, {
      path: 'alertPassWord',
      component: () => import('@/views/personCenter/userInfo/alertPassWord'),
      name: 'alertPassWord',
      meta: {
        title: 'alertPassWord'
      }
    }]
  },
  /*我的文章*/
  {
    path:'/myArticle',
    component: Layout,
    redirect: '/myArticle/sendArticle',
    meta: {
      title: 'sendArticle',
      icon: 'article'
    },
    children: [{
      path: 'sendArticle',
      component: () => import('@/views/personCenter/article/send'),
      name: 'sendArticle',
      meta: {
        title: 'sendArticle'
      }
    }, {
      path: 'loveArticle',
      component: () => import('@/views/personCenter/article/love'),
      name: 'loveArticle',
      meta: {
        title: 'loveArticle'
      }
    }]
  }
]

export default personCenterRouterMap
