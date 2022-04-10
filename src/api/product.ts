import request from "@/utils/request";

/**
 * 获取商品列表
 * @returns 
 */
export function getProductList() {
    return request({
        url: '/product/list',
        method: 'get'
    })
}