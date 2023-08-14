<script setup lang="ts">
import useSettingStore from '@/stores/modules/settingStore';

defineOptions({
  name: 'TheCopyright'
});

const settingStore = useSettingStore();
</script>

<template>
  <!-- <footer v-if="settingStore.settings.copyright.enable" class="copyright"> -->
  <footer class="copyright">
    <span>Copyright</span>
    <span class="icon">©</span>
    <span v-if="settingStore.setting.copyright?.dates">{{ settingStore.setting.copyright.dates }}</span>
    <template v-if="settingStore.setting.copyright?.company">
      <a
        v-if="settingStore.setting.copyright?.website"
        :href="settingStore.setting.copyright?.website"
        target="_blank"
        rel="noopener"
        >{{ settingStore.setting.copyright.company }}</a
      >
      <span v-else>{{ settingStore.setting.copyright.company }}</span>
    </template>
    <a v-if="settingStore.setting.copyright?.beian" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">{{
      settingStore.setting.copyright?.beian
    }}</a>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 20px;
  // color: var(--el-text-color-secondary);
  // color: var(--el-text-color-secondary);
  font-size: 14px;

  span,
  a {
    padding: 0 5px;
  }

  a {
    text-decoration: none;
    // color: var(--el-text-color-secondary);
    // transition: var(--el-transition-color);

    &:hover {
      color: bule;
      // color: var(--el-text-color-primary);
    }
  }

  .icon {
    padding: 0;
    font-size: 18px;
  }
}
</style>
