import type { RouteRecordRaw } from 'vue-router'

export const RedirectRoute: RouteRecordRaw = {
  path: '/redirect',
  name: '重定向',
  // component: Layout,
  meta: {
    title: '重定向',
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: '重定向',
      component: () => import('@/pages/redirect/index.vue'),
      meta: {
        title: '重定向',
        hideBreadcrumb: true,
      },
    },
  ],
}

export const ErrorRoute: Array<RouteRecordRaw> = [
  {
    path: '/401',
    name: '401',
    meta: {
      title: '需要登录',
    },
    component: () => import('@/pages/error/401.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '非常抱歉,页面走丢了',
    },
    component: () => import('@/pages/error/404.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    meta: {
      title: '非常抱歉,页面走丢了',
    },
    redirect: '/404',
  },
]
