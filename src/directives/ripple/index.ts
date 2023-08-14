import type { App } from 'vue';
import RippleDirective from './src/ripple-directive';

export { RippleDirective };

export default {
  title: 'Ripple 水波纹',
  category: '指令',
  status: '100%',
  install(app: App): void {
    app.directive('Ripple', RippleDirective);
  }
};
