import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import productsReducer from './reducers/products'
import messages from './reducers/messages'
import errors from './reducers/erros'
import auth from './reducers/auth'

export default combineReducers({
    form: formReducer,
    products: productsReducer,
    messages,
    errors,
    auth,
})