// / <reference types="vite/client" />
// / <reference types="vite-svg-loader" />

// 声明自动引入的 vue 组件
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 声明 icons 引入的组件
declare module '~icons/*' {
  import { FunctionalComponent, SVGAttributes } from 'vue';
  const component: FunctionalComponent<SVGAttributes>;
  export default component;
}

// 声明 md 文件
declare module '*.md' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 声明 vite 环境变量
declare interface Config {
  command: 'build' | 'serve';
  mode: string;
  /**
   * @experimental
   */
  ssrBuild?: boolean;
}
declare interface ImportMetaEnv extends Config {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_SHORT_NAME: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_BASE: string;
  readonly VITE_API_BASEURL: string;
  readonly VITE_API_URL: string;
  // 更多环境变量...
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare interface Window {
  // extend the window
  // vue 实例
  $v: object;
  // router 实例
  $r: object;
  // pinia 实例
  $s: object;
}
