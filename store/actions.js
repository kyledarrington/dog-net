export const SET_TOKEN = 'SET_TOKEN'
export const CLEAR_TOKEN = 'CLEAR_TOKEN'

export function setToken(token){
    console.log('halfway there...')
    return { type: SET_TOKEN, token }
}
export function clearToken(){
    return { type: CLEAR_TOKEN }
}