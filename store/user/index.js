export default (state = {}, action) => {
    let newState = Object.assign({}, state)
    switch(action.type){
        case 'SET_TOKEN' :
            newState.token = action.token
            return newState
        case 'CLEAR_TOKEN' :
            newState.token = ''
            return newState
        default :
            return state
    }
}