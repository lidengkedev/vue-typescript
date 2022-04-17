import router from './router'
import { getToken } from './utils/auth'

router.beforeEach((to, from) => {
    const token: string | null = getToken()
    if (!token && to.path !== '/login') {
        return '/login'
    }
})