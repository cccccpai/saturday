<script setup lang="ts">
import { ref } from 'vue'

const websiteList = [
  { id: 1, name: '百度', url: 'https://www.baidu.com' },
  {
    id: 2,
    name: '淘宝asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdas',
    url: 'https://www.taobao.com',
  },
  { id: 3, name: '知乎', url: 'https://www.zhihu.com' },
  { id: 4, name: 'GitHub', url: 'https://github.com' },
  { id: 5, name: 'Vue', url: 'https://vuejs.org' },
  { id: 6, name: 'Vite', url: 'https://vitejs.dev' },
  { id: 7, name: 'TypeScript', url: 'https://www.typescriptlang.org' },
  { id: 8, name: 'VuePress', url: 'https://v2.vuepress.vuejs.org' },
  { id: 9, name: 'Element Plus', url: 'https://element-plus.org' },
  { id: 10, name: 'VitePress', url: 'https://vitepress.vuejs.org' },
]
const isColumnLayout = ref(true)
const toggleLayout = () => {
  isColumnLayout.value = !isColumnLayout.value
}
</script>

<template>
  <div class="website">
    <div class="card">
      <div class="card-header">
        <div class="card-title">网址</div>
        <div class="card-icon" @click="toggleLayout">切换</div>
      </div>
      <div class="card-content">
        <div class="card-item" v-for="(item, index) in websiteList" :key="index">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="rich-text">
      <div class="rich-header">
        <div class="rich-title">富文本</div>
        <div class="rich-close">关闭</div>
      </div>
      <div class="rich-item">
        <textarea name="fwb" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
.website {
  display: flex;
}
.card {
  min-width: 300px;
  height: 500px;
  flex: 1;
  overflow: auto;
  border: 5px solid #efefef;
}
.card-header {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-title {
  display: flex;
  justify-content: space-between;
  background-color: #333;
  color: white;
  font-size: 18px;
}
.card-icon {
  color: white;
  background-color: #333;
  cursor: pointer;
}
.card-content {
  overflow: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
}
.card-item {
  padding: 10px;
  height: 50px;
  border-bottom: 1px solid #efefef;
  text-overflow: ellipsis;
  overflow: hidden;
  flex: 2;
  white-space: nowrap;
  &:last-child {
    border: none;
  }
}
.card-item:hover {
  background-color: #efefef;
}
.card-item:active {
  background-color: #efefef;
}

.rich-text {
  margin: 0 20px;
  flex: 1;
  overflow: auto;
  border: 5px solid #efefef;
}
</style>
