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
/**
 * 获取用户列表
 * @returns 
 */
export function getUserList() {
    return request({
        url: '/user/list',
        method: 'get'
    })
}
/**
 * 获取用户角色
 * @returns 
 */
export function getUserRoles() {
    return request({
        url: '/user/roles',
        method: 'get'
    })
}
/**
 * 获取用户权限
 * @returns 
 */
export function getUserAuthority() {
    return request({
        url: '/user/authority',
        method: 'get'
    })
}