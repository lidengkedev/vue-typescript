import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken, setToken } from './auth'

enum MESSAGE {
    "操作成功" = 200,
    "密码错误",
    "账号错误",
    "请求异常"
}

const options = {
    baseURL: process.env.VUE_APP_SERVER_BASE,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
}

const request = axios.create(options)

request.interceptors.request.use(
    config => {
        config.headers = config.headers || {}
        const token = getToken() || ''
        if (token) {
            config.headers.token = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        const { data } = response
        const code:number = data.code
        if (code !== 200) {
            ElMessage.error(MESSAGE[code])
            return Promise.reject(data)
        }
        return data
    },
    error => {
        return Promise.reject(error)
    }
)

export default request