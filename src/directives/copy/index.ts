import type { App } from 'vue';
import CopyDirective from './src/v-copy';

export { CopyDirective };

export default {
  title: 'copy 复制',
  category: '指令',
  status: '100%',
  install(app: App): void {
    app.directive('copy', CopyDirective);
  }
};
