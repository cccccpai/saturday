import settingDefault from '@/setting'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useSettingStore = defineStore(
  // 唯一ID
  'setting',
  () => {
    const setting = ref(settingDefault)

    // 操作系统
    const os = ref<'mac' | 'windows' | 'linux' | 'other'>('other')
    const agent = navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.includes('mac os'):
        os.value = 'mac'
        break
      case agent.includes('windows'):
        os.value = 'windows'
        break
      case agent.includes('linux'):
        os.value = 'linux'
        break
    }

    // 页面标题
    // const title = ref<RouteMeta['title']>()
    // 设置网页标题
    // function setTitle(_title: RouteMeta['title']) {
    //   title.value = _title
    // }

    return {
      setting,
      os,
    }
  },
)

export default useSettingStore
