import { ActionContext, Module } from 'vuex'
import RootStateTypes from '../types/interface'
import PermissionModuleTypes from '../types/permission.interface'

interface State {
    authCodeList: string[]
}

const state: State = {
    authCodeList: [
        'produst:search',
        'role:add',
        'role:auth'
    ]
}
const mutations = {
    SET_AUTH_CODE(state: any, authCode: []) {
        state.authCodeList = authCode
    }
}
const actions = {
    getPermission({ state: {} }) {
        // return new Promise((resolve) => {
        //     resolve(state.authCodeList)
        // })
        return state.authCodeList
    },
    permission(context: ActionContext<State, any>, authCode: []) {
        context.commit('SET_AUTH_CODE', authCode)
    }
}

const permission: Module<PermissionModuleTypes, RootStateTypes> = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default permission