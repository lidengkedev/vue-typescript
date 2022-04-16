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
    roles: number[] | string[]
}
export interface IUserSearchParams {
    username: string
    phone: number | string
    role: number
}

export interface IRoles {
    roleId: number
    roleName: string
    authority: number[]
}
export interface IFormData {
    username: string
    phone: number
    email: string
    roles: number[]
}

export class InitPage {
    userList: [IUserList][] = []
    search: IUserSearchParams = {
        username: '',
        phone: '',
        role: 0
    }
    roles: IRoles[] = []
    is_show_dialog: boolean = false
    form: IFormData = {
        username: '',
        phone: 0,
        email: '',
        roles: [] = []
    }
}