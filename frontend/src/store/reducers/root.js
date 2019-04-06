

import {combineReducers} from 'redux';
import loginReducer from "./login";
import registerReducer from "./register";
import authReducer from "./auth";
import tokenLoginReducer from "./app";




const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    auth: authReducer,
    app: tokenLoginReducer,

});

export default rootReducer;