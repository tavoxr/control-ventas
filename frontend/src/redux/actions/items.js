import axios from 'axios'
import {GET_ITEMS, UPDATE_ITEM} from './types'
import { tokenConfig } from './auth';
import { createMessage, returnErrors } from './messages';

export const getItems = ()=> (dispatch, getState) =>{
    axios.get('http://localhost:8000/api/items', tokenConfig(getState))
    .then(response =>  dispatch({type:GET_ITEMS, payload: response.data}))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}



export const updateItem = (item)=> (dispatch, getState) =>{
    axios.post('http://localhost:8000/api/updateItem', item, tokenConfig(getState))
    .then(response =>  dispatch({type:UPDATE_ITEM, payload: response.data}))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}