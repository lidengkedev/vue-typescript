import request from "@/utils/request";

interface loginParams {
    username: string
    password: string
}

/**
 * 用户登录
 * @param data 
 * @returns 
 */
export function login(data: loginParams) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}