import {
    LOGIN,
    REGISTER,
    LOGOUT
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
       case REGISTER:
           localStorage.setItem('token', payload.token);
           return {
               ...state,
               ...payload,
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