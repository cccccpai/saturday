import type { App } from 'vue';
import { createPinia } from 'pinia';

const pinia = createPinia();

export { pinia };

// https://pinia.vuejs.org/
/**
 * 安装 pinia
 */
export default {
  async install(app: App) {
    app.use(pinia);
  }
};
