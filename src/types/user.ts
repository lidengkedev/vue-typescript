export interface IUserList {
    id: number
    username: string
    nikename: string
    age: number
    phone: number
    email: string
    province: string
    city: string
    county: string
    region: string
    roles: []
}
export interface IUserSearchParams {
    username: string
    phone: number | string
    role: number
}

export interface IRoles {
    roleId: number
    roleName: string
    suthorty: number[]
}

export class InitPage {
    userList: IUserList[] = []
    search: IUserSearchParams = {
        username: '',
        phone: '',
        role: 0
    }
    roles: IRoles[] = []
}