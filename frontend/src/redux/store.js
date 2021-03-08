import {createStore, applyMiddleware } from 'redux'
// import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducers'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'


const initialState = {}
const middleware = [thunk]

const store = createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    )


export default store