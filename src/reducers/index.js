import { combineReducers } from 'redux'
import { 
    CREATE_USER, 
    DELETE_USER
} from '../actions'

const initialUserList = {
    users: []
}

function users(state = initialUserList, action) {
    switch(action.type) {
        case CREATE_USER:
            return {
                ...state,
                users: state.users.concat(action.user)
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            }
        default:
            return state
    }
}

export default combineReducers({
    users
  })