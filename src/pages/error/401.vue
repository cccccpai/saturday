<template>
    <div>
        <h1>页面无权限</h1>
        <h3>请联系管理员申请权限</h3>
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