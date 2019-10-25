export const SET_TOKEN = 'SET_TOKEN'
export const CLEAR_TOKEN = 'CLEAR_TOKEN'

export function setToken(user){
    return { type: SET_TOKEN, user }
}
export function clearToken(){
    return { type: CLEAR_TOKEN }
}