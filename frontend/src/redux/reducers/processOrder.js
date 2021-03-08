import {PROCESS_ORDER} from '../actions/types'


export const initialState = {
    processOrder: ''

}

export default function(state = initialState,action){
    switch(action.type){
        case PROCESS_ORDER:
            return{
                ...state,
                processOrder: action.payload
            }
       
        default: 
            return state
    }
    
}