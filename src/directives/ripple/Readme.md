copy 自 `DevCloudFE/vue-devui`

>Github 源码：https://github.com/DevCloudFE/vue-devui/tree/dev/packages/devui-vue/devui/ripple
>
>参考说明：https://juejin.cn/post/7137073977146474527

## 使用方式
### Ripple 参数[#](https://vue-devui.github.io/components/ripple/#ripple-参数)

| 参数名          | 类型      | 默认        | 说明                              |
| :-------------- | :-------- | :---------- | :-------------------------------- |
| color           | `string`  | '#00000050' | 可选，默认当前文本颜色            |
| initial-opacity | `number`  | 0.1         | 可选，初始交互效果透明度大小      |
| final-opacity   | `number`  | 0.1         | 可选，结束交互效果长按透明度大小  |
| duration        | `number`  | 400         | 可选，持续时间                    |
| easing          | `string`  | 'ease-out'  | 可选，缓动动画                    |
| delay           | `number`  | 75`         | 可选，延迟 debouceTime 时间后调用 |
| disabled        | `boolean` | false       | 可选，禁止水波效果                |

### 例子：
~~~vue
<template>
  <ul class="demo-ripple">
    <li
      v-for="item in [
        { color: '#409EFF', text: '这是一条 Primary 涟漪' },
        { color: '#67C23A', text: '这是一条 Success 涟漪' },
        { color: '#E6A23C', text: '这是一条 Warning 涟漪' },
        { color: '#F56C6C', text: '这是一条 Danger 涟漪' },
        { color: '#909399', text: '这是一条 Info 涟漪' }
      ]"
      :style="{ color: item.color }"
    >
      <div class="ripple-change-text-color" v-ripple="{ duration: 300 }">
        {{ item.text }}
      </div>
    </li>
  </ul>
</template>
<style>
  .demo-ripple {
    list-style: none;
    padding-left: 0;
  }
</style>
~~~
