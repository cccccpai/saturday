import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/pages/HomeView.vue';
import { RedirectRoute, ErrorRoute } from './route.constant';
import type { App } from 'vue';

import TheDemo from '@/pages/TheDemo.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import TestLayout from '@/layouts/TestLayout.vue';
import TestPage from '@/pages/TheTest/index.vue';

const RootRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // 推荐使用这种方式 引入，好处：给每个路由单独的chunk，懒加载访问
    component: () => import('@/pages/AboutView.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    // 推荐使用这种方式 引入，好处：给每个路由单独的chunk，懒加载访问
    component: DefaultLayout,
    children: [{ path: '', name: 'none', component: TheDemo }]
  },
  {
    path: '/test',
    name: 'test',
    // 推荐使用这种方式 引入，好处：给每个路由单独的chunk，懒加载访问
    component: TestLayout,
    children: [{ path: '', name: 'test', component: TestPage }]
  }
];

const constantRouter: any[] = [...RootRoute, RedirectRoute, ...ErrorRoute];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouter,
  strict: true
});

export { constantRouter, router };

/**
 * 安装 vue-router
 */
export default {
  async install(app: App) {
    app.use(router);
    // 路由准备就绪后挂载APP实例
    await router.isReady();
  }
};
