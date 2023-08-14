import type { App } from 'vue';
import PermissionDirective from './src/v-permission';

export { PermissionDirective };

export default {
  title: 'permission 权限',
  category: '指令',
  status: '0%',
  install(app: App): void {
    app.directive('permission', PermissionDirective);
  }
};
