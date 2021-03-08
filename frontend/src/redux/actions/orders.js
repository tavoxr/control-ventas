import axios from 'axios'
import {GET_ORDERS} from './types'
import { tokenConfig } from './auth';
import { createMessage, returnErrors } from './messages';

export const getOrders = ()=> (dispatch, getState) =>{
    axios.get('http://localhost:8000/api/orders', tokenConfig(getState))
    .then(response =>  dispatch({type:GET_ORDERS, payload: response.data}))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}