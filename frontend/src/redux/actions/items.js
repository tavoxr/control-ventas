import axios from 'axios'
import {GET_ITEMS} from './types'
import { tokenConfig } from './auth';
import { createMessage, returnErrors } from './messages';

export const getItems = ()=> (dispatch, getState) =>{
    axios.get('http://localhost:8000/api/items', tokenConfig(getState))
    .then(response =>  dispatch({type:GET_ITEMS, payload: response.data}))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}