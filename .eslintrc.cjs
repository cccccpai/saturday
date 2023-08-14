/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

// eslint-disable-next-line
var inProductionEnv = process.env.NODE_ENV === 'production';
// eslint-disable-next-line
var rulesSeverityOff = inProductionEnv ? 'warn' : 'off';

module.exports = {
  root: true,
  /* 指定当前环境，可以使用 eslint-config-xxx 提供的环境配置 */
  env: {
    browser: true,
    node: true
  },
  /* 通过指定继承的配置，可以继承其他的配置 */
  extends: [
    '@unocss',
    // 'plugin:prettier/recommended',
    'plugin:vue/vue3-essential', // 使用插件支持 vue3
    'eslint:recommended', // 使用推荐的 eslint 规则
    '@vue/eslint-config-typescript', // 使用推荐的 typescript 规则
    '@vue/eslint-config-prettier/skip-formatting' // 使用插件支持 prettier  规则
  ],
  /* 指定解析器，可以使用提供的解析器 */
  parserOptions: {
    ecmaVersion: 'latest'
  },
  /* 使用插件，可以使用eslint-plugin-xxx提供的插件 */
  // plugins: ['vue', 'prettier', '@typescript-eslint', 'html']
  /* 自定义规则，可以根据自己的需要进行调整 */
  rules: {
    //   /* 分号 */
    //   semi: ['error', 'always'], // never: 不使用分号
    //   /* 禁止使用 */
    //   'no-console': rulesSeverityOff, // 禁止出现 console
    //   'no-debugger': rulesSeverityOff, // 禁止出现 debugger
    //   'no-unused-expressions': 'off', // 禁止未使用的表达式
    //   'no-undef': 'off', //
    //   /* max */
    //   'max-len': ['warn', { code: 200, tabWidth: 2 }], // 字符串最大长度
    //   'max-depth': ['warn', 4], // 要求可嵌套的块的最大深度4
    //   'max-statements': ['warn', 100], // 要求函数块最多允许的的语句数量100
    //   'max-nested-callbacks': ['warn', 3], // 要求回调函数最大嵌套深度3
    //   'max-statements-per-line': ['warn', { max: 1 }], // 要求每一行中所允许的最大语句数量
    //   /* 空格相关 */
    //   'spaced-comment': 1, // 要求 // 注释后面加一个空格
    //   /*  typescript 相关 */
    //   '@typescript-eslint/no-namespace': ['warn', { allowDeclarations: true }],
    //   '@typescript-eslint/no-explicit-any': rulesSeverityOff,
    //   '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^(_|Cypress)' }],
    //   /* vue */
    //   'vue/require-default-prop': 0, // 关闭属性参数必须默认值
    //   'vue/singleline-html-element-content-newline': 0, // 关闭单行元素必须换行符
    //   'vue/multiline-html-element-content-newline': 0, // 关闭多行元素必须换行符
    'vue/multi-word-component-names': 'off' // off：关闭 vue的组件必须使用多单词命名模式
    //   // 要求每一行标签的最大属性不超1个
    //   'vue/max-attributes-per-line': [
    //     'warn',
    //     {
    //       singleline: 5, // 如果是单行，每行 attributes 不能超过 max 个
    //       multiline: 5 // 如果是多行， 多行 attributes 不能超过 max 个
    //     }
    //   ],
    //   // 要求html标签的缩进为需要2个空格
    //   'vue/html-indent': [
    //     'warn',
    //     2,
    //     {
    //       attribute: 1,
    //       baseIndent: 1,
    //       closeBracket: 0,
    //       alignAttributesVertically: true,
    //       ignores: []
    //     }
    //   ],
    //   // 取消关闭标签不能自闭合的限制设置
    //   // 'vue/html-self-closing': ['warn', { html: { void: 'always', normal: 'never', component: 'always' }, svg: 'always', math: 'always' }],
    //   /* others */
    //   'comma-dangle': ['warn', 'only-multiline'],
    //   // Delegates import sorting order to import-sort plugin
    //   'import/order': 'off',
    //   // Delegates curly brace spacing to prettier
    //   'object-curly-spacing': 'off'
  }
};
