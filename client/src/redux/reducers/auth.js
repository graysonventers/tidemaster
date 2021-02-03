import {
    LOGIN,
    REGISTER,
    LOGOUT,
    LOAD_USER,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOAD_USER_FAIL
} from '../actions/actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function auth (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER:
        case LOGIN:
           localStorage.setItem('token', payload.token);
           return {
               ...state,
               ...payload,
               isAuthenticated: true,
               loading: false
           }
        case LOGOUT:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOAD_USER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        default:
            return state;
    }
};
