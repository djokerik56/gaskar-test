import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import projectReducer from "./project-reducer";

let redusers = combineReducers({
    form: formReducer,
    auth: authReducer,
    project: projectReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware) )

export default store;