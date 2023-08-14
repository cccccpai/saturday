<script setup lang="ts"></script>

<template>
  <div>
    <h1>DefaultLayout.vue</h1>
    <var-divider dashed> 这个是 var-divider dashed </var-divider>
    <div class="layview">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scope>
.layview {
  overflow: auto;
  border: red solid 1px;
}
</style>
