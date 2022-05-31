import { createApp } from 'vue'
import store from '@/store'

const app = createApp({})

function disabledClickFun(event: Event) {
    event && event.stopImmediatePropagation()
}

// const authCodeList: string[] = store.dispatch('permission/getPermission')
// const authCodeList: Array<string> = store.state.permission.authCodeList

export function hasPermission() {
    app.directive('permission', {
        async mounted(el, binding, vnode) {
            let disabled: boolean = true
            // const authCodeList: string[] = await store.dispatch('permission/getPermission')
            const authCodeList: string[] = [
                'produst:search',
                'role:add',
                'role:auth'
            ]
            if (authCodeList.length > 0 && !authCodeList.includes(binding.value)) {
                disabled = false
            }
            if (disabled) {
                el.setAttribute('disbaled', 'disabled')
                el.classList.add('permission-disabled')
                el.addEvenListener('click', disabledClickFun, true)
            }
        },
        unmounted(el) {
            el.removeEventListener('click', disabledClickFun)
        }
    })
}