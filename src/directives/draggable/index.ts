import type { App } from 'vue';
import DraggableDirective from './src/v-draggable';

export { DraggableDirective };

export default {
  title: 'draggable 权限',
  category: '指令',
  status: '0%',
  install(app: App): void {
    app.directive('draggable', DraggableDirective);
  }
};
