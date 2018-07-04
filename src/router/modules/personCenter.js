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
      roles: ['admin', 'editor'],
      group:'personCenter'
    },
    children: [{
      path: 'info',
      component: () => import('@/views/personCenter/userInfo/info'),
      name: 'myInfo',
      meta: {
        title: 'myInfo',
        group:'personCenter'
      }
    }, {
      path: 'alertPassWord',
      component: () => import('@/views/personCenter/userInfo/alertPassWord'),
      name: 'alertPassWord',
      meta: {
        title: 'alertPassWord',
        group:'personCenter'
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
      icon: 'article',
      group:'personCenter'
    },
    children: [{
      path: 'sendArticle',
      component: () => import('@/views/personCenter/article/send'),
      name: 'sendArticle',
      meta: {
        title: 'sendArticle',
        group:'personCenter'
      }
    }, {
      path: 'loveArticle',
      component: () => import('@/views/personCenter/article/love'),
      name: 'loveArticle',
      meta: {
        title: 'loveArticle',
        group:'personCenter'
      }
    }]
  }
]

export default personCenterRouterMap
