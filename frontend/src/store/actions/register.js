import axios from "axios";
import {REGISTER_ACTIVATE_URL, REGISTER_URL} from "../../api-urls";
import {loginSuccess} from "./login";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const REGISTER_ACTIVATE_ERROR = 'REGISTER_ACTIVATE_ERROR';


export const registerUser = (user) => {
    return dispatch => {
        dispatch({type: REGISTER_REQUEST});
        return axios.post(REGISTER_URL, user).then(response => {
            console.log(response);
            return dispatch({type: REGISTER_SUCCESS})
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            return dispatch({type: REGISTER_ERROR, errors: error.response.data});
        });
    }
};


export const activateUser = (token) => {
    return dispatch => {
        return axios.post(REGISTER_ACTIVATE_URL, {token}).then(response => {
            console.log(response);
            // если запрос на активацию прошел успешно, записываем его токен в localStorage
            localStorage.setItem('auth-token', response.data.token);
            // и отправляем запрос на логин, при успешном запросе получаем данные (юзернейм и пароль)
            return dispatch(loginSuccess(response.data));
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            return dispatch({type: REGISTER_ACTIVATE_ERROR, error: error.response.data.token[0]});
        })
    }
};