import type { App } from 'vue';
import ThrottleDirective from './src/v-throttle';

export { ThrottleDirective };

export default {
  title: 'throttle 节流',
  category: '指令',
  status: '100%',
  install(app: App): void {
    app.directive('throttle', ThrottleDirective);
  }
};
