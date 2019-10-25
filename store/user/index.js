export default (state = {}, action) => {
    let newState = Object.assign({}, state)
    switch(action.type){
        case 'SET_TOKEN' :
            newState.token = action.user.token
            newState.id = action.user.id
            return newState
        case 'CLEAR_TOKEN' :
            newState.token = ''
            newState.id = ''
            return newState
        default :
            return state
    }
}