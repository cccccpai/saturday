import { createApp } from 'vue';
import App from './App.vue';
import Router, { router } from './router';
import Pinia, { pinia } from './stores';
import Directive from '@/directives';

import Varlet from '@varlet/ui';
import '@varlet/ui/es/style';
import '@varlet/touch-emulator';

import '@iconify-json/mdi';
import { addCollection } from '@iconify/vue';
import mdiJson from '@iconify-json/mdi/icons.json';

import 'uno.css';

const app = createApp(App);

function appInit() {
  //  路由
  Router.install(app);
  // pinia
  Pinia.install(app);
  // 安装指令
  Directive.install(app);
  // 全局组件
  app.use(Varlet);
  // 离线加载图标数据
  addCollection(mdiJson);
  // 挂载
  app.mount('#app');
}

appInit();

window.$s = pinia;
window.$r = router;
window.$v = app;
