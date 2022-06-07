import { legacy_createStore as createStore,compose,combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({

}) 
const composeEnachers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer,composeEnachers(applyMiddleware(thunk)))