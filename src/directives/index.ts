/**
 * 指令的统一注册
 */
import type { App } from 'vue';

// import { RippleDirective } from './ripple';
import { CopyDirective } from './copy';
import { PermissionDirective } from './permission';
import { DebounceDirective } from './debounce';
import { ThrottleDirective } from './throttle';
import { DraggableDirective } from './draggable';

/**
 * 所有指令的统一安装位置
 */
export default {
  async install(app: App) {
    // 水波纹指令（抄的 varlet-ui）
    // app.directive('ripple', RippleDirective);
    // 权限控制指令（演示）
    app.directive('permission', PermissionDirective);
    // 复制指令
    app.directive('copy', CopyDirective);
    // 防抖指令
    app.directive('debounce', DebounceDirective);
    // 节流指令
    app.directive('throttle', ThrottleDirective);
    // 拖拽指令
    app.directive('draggable', DraggableDirective);
  }
};
