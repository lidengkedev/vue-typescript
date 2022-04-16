export interface IRole {
    roleId: number
    roleName: string
    authority: number[]
}

export interface IAuthorityList {
    name: string
    roleId: number,
    viewRole?: string
    roleList?: IAuthorityList
}

export interface IAuthority {
    id: number
    authorityIds: []
}

export class InitPage {
    roleList: IRole[] = []
    form: IRole = {
        roleId: 0,
        roleName: "",
        authority: []
    }
    is_show_dialog_add: boolean = false
}

export class AuthorityList {
    is_show_dialog_auth: boolean = false
    authorityList: IAuthorityList[] = []
    authorityIds: number[] = []
    constructor (authority: number[]) {
        this.authorityIds = authority
    }
}