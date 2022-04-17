import router from './router'
import { getToken } from './utils/auth'

router.beforeEach((to, from) => {
    document.title = 'VUE-TYPESCRIPT|' + to.meta.title
    console.log({ from: from.path, to: to.path })
    const token: string | null = getToken()
    if (!token && to.path !== '/login') {
        return '/login'
    }
})