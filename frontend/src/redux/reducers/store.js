import {GET_ALL_USERS_PRODUCTS} from '../actions/types'


export const initialState = {
    allUsersProducts:[]

}

export default function(state = initialState,action){
    switch(action.type){
        case GET_ALL_USERS_PRODUCTS:
            return{
                ...state,
                allUsersProducts: action.payload
            }
       
        default: 
            return state
    }
    
}