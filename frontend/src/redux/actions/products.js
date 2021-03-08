import axios from 'axios'
import {GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT} from './types'
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';


// PRODUCTS LIST
export const getProducts = ()=> (dispatch, getState) =>{
    axios.get('http://127.0.0.1:8000/api/products', tokenConfig(getState))
    .then(response =>  dispatch({type:GET_PRODUCTS, payload: response.data}))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}
// ADD PRODUCT
export const addProduct = (product) => (dispatch, getState)=>{
    axios.post(`http://127.0.0.1:8000/api/products/`,product, tokenConfig(getState))
    .then(response =>{ 
        dispatch({type:ADD_PRODUCT, payload: response.data})
        
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
    

}

// DELETE PRODUCT
export const deleteProduct = (id) => (dispatch, getState)=>{
    axios.delete(`http://127.0.0.1:8000/api/products/${id}/`, tokenConfig(getState))
    .then(response => dispatch({type:DELETE_PRODUCT, payload: id}))
    .catch((err) => console.log(err));
    

}