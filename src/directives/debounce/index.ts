import type { App } from 'vue';
import DebounceDirective from './src/v-debounce';

export { DebounceDirective };

export default {
  title: 'debounce 防抖',
  category: '指令',
  status: '100%',
  install(app: App): void {
    app.directive('debounce', DebounceDirective);
  }
};
