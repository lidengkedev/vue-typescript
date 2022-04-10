export interface IProductList {
    userId: number
    id: number
    title: string
    body: string
}
export interface ISearchParams {
    title: string
    body: string
    page: number
    count: number
}
export interface IPaginaction {
    page: number
    size: number
    total: number
}
export class InitPage {
    search: ISearchParams = {
        title: '',
        body: '',
        page: 1,
        count: 0
    }
    productList: IProductList[] = []
    page: IPaginaction = {
        page: 1,
        size: 15,
        total: 0
    }
}
