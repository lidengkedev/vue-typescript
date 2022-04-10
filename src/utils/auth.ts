const TOKENKEY:string = 'TOKENKEY'

const session = window.sessionStorage

export function setToken(token:string) {
    session.setItem(TOKENKEY, token)
}
export function getToken() {
    return session.getItem(TOKENKEY)
}
export function removeToken() {
    session.removeItem(TOKENKEY)
}