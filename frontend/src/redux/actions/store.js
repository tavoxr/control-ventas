import axios from 'axios'
import {GET_ALL_USERS_PRODUCTS} from './types'
import { tokenConfig } from './auth';
import { createMessage, returnErrors } from './messages';

export const getAllUsersProducts = ()=> (dispatch, getState) =>{
    axios.get(`http://127.0.0.1:8000/api/all-products`, tokenConfig(getState))
    .then(response =>  dispatch({type:GET_ALL_USERS_PRODUCTS, payload: response.data}))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}