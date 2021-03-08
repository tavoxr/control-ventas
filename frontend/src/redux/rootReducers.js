import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import productsReducer from './reducers/products'
import messages from './reducers/messages'
import errors from './reducers/erros'
import auth from './reducers/auth'
import allProducts from './reducers/store'
import allItems from './reducers/items'
import  allOrders from './reducers/orders'
import updateI from './reducers/updateItem'
import porder from './reducers/processOrder'
import totalOrd from './reducers/totalOrders'
export default combineReducers({
    form: formReducer,
    products: productsReducer,
    allUsersProducts: allProducts,
    messages,
    errors,
    auth,
    items : allItems,
    orders: allOrders,
    updateItem: updateI,
    processOrder: porder,
    totalOrders: totalOrd,
})