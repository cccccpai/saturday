<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Prop {
  icon: string
  text: string
}

const props = withDefaults(defineProps<Prop>(), {
  icon: 'mdi:heart',
  text: '分组',
})
</script>

<template>
  <var-row justify="space-between">
    <var-col :span="8">
      <var-space>
        <var-chip :round="false" class="chip">
          {{ props.text }}
          <template #left>
            <Icon :icon="props.icon" />
          </template>
        </var-chip>
      </var-space>
    </var-col>
  </var-row>
</template>

<style lang="scss" scope>
.chip {
  justify-content: flex-start;
}
</style>
