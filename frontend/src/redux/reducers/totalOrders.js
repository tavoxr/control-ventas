import {TOTAL_ORDERS} from '../actions/types'


export const initialState = {
    totalOrders:[]

}

export default function(state = initialState,action){
    switch(action.type){
        case TOTAL_ORDERS:
            return{
                ...state,
                totalOrders: action.payload
            }
       
        default: 
            return state
    }
    
}