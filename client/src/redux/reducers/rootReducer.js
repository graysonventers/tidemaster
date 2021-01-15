import {
    LOGIN,
    REGISTER,
    LOGOUT,
    LOAD_USER
} from '../actions/actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function (state = initialState, action) {
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
               token: payload.token,
               isAuthenticated: true,
               loading: false
           }
        case LOGOUT:
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