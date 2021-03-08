import axios from 'axios'
import {GET_ORDERS, PROCESS_ORDER, TOTAL_ORDERS} from './types'
import { tokenConfig } from './auth';
import { createMessage, returnErrors } from './messages';

export const getOrders = ()=> (dispatch, getState) =>{
    axios.get('http://localhost:8000/api/orders', tokenConfig(getState))
    .then(response =>  dispatch({type:GET_ORDERS, payload: response.data}))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}



export const processOrder = (order)=> (dispatch, getState) =>{
    axios.post('http://localhost:8000/api/processOrder', order, tokenConfig(getState))
    .then(response =>  dispatch({type:PROCESS_ORDER, payload: response.data}))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getTotalOrders = ()=> (dispatch, getState) =>{
    axios.get('http://localhost:8000/api/totalOrders', tokenConfig(getState))
    .then(response =>  dispatch({type:TOTAL_ORDERS, payload: response.data}))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}



