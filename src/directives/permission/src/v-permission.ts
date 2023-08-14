/**
 * 权限指令，如果没有权限，则将当前的区块设置为 disable 不可见
 */

import { ObjectDirective } from 'vue';
// import { usePermission } from '@/hooks/web/usePermission';
const permission: ObjectDirective = {
  mounted(el: HTMLButtonElement, binding) {
    if (binding.value == undefined) return;
    // const { action, effect } = binding.value;
    // const { hasPermission } = usePermission();
    // if (!hasPermission(action)) {
    //   if (effect == 'disabled') {
    //     el.disabled = true;
    //     el.style['disabled'] = 'disabled';
    //     el.classList.add('n-button--disabled');
    //   } else {
    //     el.remove();
    //   }
    // }
  }
};

export default permission;
