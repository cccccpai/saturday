<template>
    <div>
        <h1>页面未找到</h1>
        <h3>请检查路径后重试或返回首页</h3>
        <button @click="goBack">Back</button>
    </div>
</template>
  
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
    router.push({
        name: 'home',
    });
};
</script>