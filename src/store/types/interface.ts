import PermissionModuleTypes from "./permission.interface"

export default interface RootStateTypes {
    test: string
}

export interface AllStateTypes extends RootStateTypes {
    permission: PermissionModuleTypes
}
