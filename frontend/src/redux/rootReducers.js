import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import productsReducer from './reducers/products'
import messages from './reducers/messages'
import errors from './reducers/erros'
import auth from './reducers/auth'
import allProducts from './reducers/store'
import allItems from './reducers/items'
import  allOrders from './reducers/orders'



export default combineReducers({
    form: formReducer,
    products: productsReducer,
    allUsersProducts: allProducts,
    messages,
    errors,
    auth,
    items : allItems,
    orders: allOrders,
})