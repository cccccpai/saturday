import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';
import presets from './presets/presets';

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => {
  //   获取到 .env 暴露的变量
  const viteEnv = loadEnv(env.mode, process.cwd()) as ImportMetaEnv;
  /* 当前运行模式 */
  const isProd = process.env.NODE_ENV == 'production' || env.mode == 'production' || true; // 如果第一个为false，则一直往下面判断，直到遇到 true 为止
  const envStr = isProd ? '生产环境' : '测试环境';
  console.log('envStr -->', envStr);
  console.log('viteEnv -->', viteEnv);
  return {
    base: viteEnv.VITE_BASE,
    // 插件
    plugins: [presets(env)],
    // 别名设置
    resolve: {
      alias: {
        '~': resolve(__dirname, './src'), // 把 ~ 指向到 项目根目录 /
        '@': fileURLToPath(new URL('./src', import.meta.url)) // 把 @ 指向到 /src 目录
      }
    },
    // 服务设置
    server: {
      host: viteEnv.VITE_NET_HOST, // host设置为true才可以使用network的形式，以ip访问项目
      port: parseInt(viteEnv.VITE_NET_PORT), // 端口号
      open: false, // 自动打开浏览器
      cors: true, // 跨域设置允许
      strictPort: true, // 如果端口已占用直接退出
      // 接口代理
      proxy: {
        [viteEnv.VITE_NET_HOST]: {
          // 接口服务器
          target: viteEnv.VITE_API_URL,
          changeOrigin: true, // 允许跨域
          rewrite: (path) => path.replace('/api/', '/')
        }
      }
    },
    build: {
      reportCompressedSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      minify: 'esbuild',
      assetsDir: 'static/assets',
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    css: {
      preprocessorOptions: {
        // 全局引入了 scss 的文件
        // scss: {
        //   additionalData: `
        //   @import "@/assets/styles/variables.scss";
        // `,
        //   javascriptEnabled: true,
        // },
      }
    }
  };
});
