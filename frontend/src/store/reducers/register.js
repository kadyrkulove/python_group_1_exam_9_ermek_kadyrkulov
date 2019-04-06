import {
    REGISTER_ACTIVATE_ERROR,
    REGISTER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "../actions/register";
import {LOGIN_SUCCESS} from "../actions/login";

const initialState = {
    errors: {},
    loading: false,
    activate: {
        error: null
    }
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {...state, errors: {}, loading: true};
        case REGISTER_ERROR:
            return {...state, errors: action.errors, loading: false};
        case REGISTER_SUCCESS:
            return {...state, loading: false};
        case REGISTER_ACTIVATE_ERROR:
            return {
                ...state,
                activate: {...state.activate, error: action.error}
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                activate: {...state.activate, error: null}
            };
        default:
            return state;
    }
};

export default registerReducer;