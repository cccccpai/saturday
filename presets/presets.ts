import { ConfigEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
// import Pages from 'vite-plugin-pages';
// import Layouts from 'vite-plugin-vue-layouts';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { VarletUIResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers';
import Markdown from 'vite-plugin-vue-markdown';
import Prism from 'markdown-it-prism';
import Unfonts from 'unplugin-fonts/vite';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import LinkAttributes from 'markdown-it-link-attributes';
import Unocss from 'unocss/vite';
import VueDevTools from 'vite-plugin-vue-devtools';

const defaultClasses = 'prose prose-sm m-auto text-left';

export default (env: ConfigEnv) => {
  env;
  return [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),

    // 可以将 svg 资源当作组件引入： 例如： import MyIcon from './my-icon.svg'
    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader(),

    // 使用文件系统路由的页面 https://github.com/hannoeru/vite-plugin-pages
    // Pages({
    //   extensions: ['vue', 'md'], // 需要扫描的 页面组件 文件扩展名。
    //   pagesDir: [{ dir: 'src/**/pages', baseRoute: '' }] // 用于搜索页面组件的目录路径。
    // }),
    // 布局 https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    // Layouts({
    //   defaultLayout: 'DefaultLayout', // 默认布局的文件名（不需要写 .vue 后缀）
    //   layoutsDirs: 'src/layouts' // 搜索页面组件的目录的相对路径。
    // }),
    // 自动导入 https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: 'src/auto-imports.d.ts', // 用于生成相应.d.ts文件的文件路径。在本地安装typescript时启用默认设置。将false设置为禁用。
      imports: ['vue', 'pinia', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [VarletUIResolver()]
    }),
    // 自动引入组件 https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/components.d.ts', // 用于生成相应.d.ts文件的文件路径。在本地安装typescript时启用默认设置。将false设置为禁用。
      extensions: ['vue', 'md'], // 允许在 `./src/components/` 下自动加载标记组件
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/], // 允许自动导入和注册 markdown 中使用的组件
      // imports 指定组件所在位置，默认为 src/components; 有需要也可以加上 view 目录
      dirs: ['src/components/'], // 要搜索组件的目录的相对路径
      resolvers: [VarletUIResolver(), IconsResolver(), VueUseComponentsResolver()]
    }),
    // https://github.com/antfu/unplugin-icons
    Icons({
      compiler: 'vue3',
      autoInstall: true
    }),
    // https://github.com/cssninjaStudio/unplugin-fonts
    Unfonts({
      google: {
        families: ['Open Sans', 'Montserrat', 'Fira Sans']
      }
      // custom: {
      //   families: [{
      //     name: 'Fira Code',
      //     local: 'Fira Code',
      //     src: 'src/assets/fonts/*.ttf',
      //     transform(font) {
      //       if (font.basename === 'Roboto-Bold') {
      //         // update the font weight
      //         font.weight = 700
      //       }
      //       // we can also return null to skip the font
      //       return font
      //     }
      //   }],
      //   display: 'auto',
      //   preload: true,
      //   prefetch: false,
      //   injectTo: 'head-prepend',
      // },
    }),

    VueI18n({
      include: [resolve(__dirname, '../locales/**')]
    }),

    Markdown({
      wrapperClasses: defaultClasses,
      headEnabled: false,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism);
        // 为 md 中的所有链接设置为 新页面跳转
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        });
      }
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),
    VueDevTools()
  ];
};
