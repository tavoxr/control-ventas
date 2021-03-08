import {UPDATE_ITEM} from '../actions/types'


export const initialState = {
    updateItem: ''

}

export default function(state = initialState,action){
    switch(action.type){
        case UPDATE_ITEM:
            return{
                ...state,
                updateItem: action.payload
            }
       
        default: 
            return state
    }
    
}


