function userToken(state = '', action){
    switch(action.type){
        case 'SET' :
            return action.token
        case 'CLEAR' :
            return ''
    }
}

