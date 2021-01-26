import axios from 'axios';

import {
    LOAD_USER,
    LOGIN,
    REGISTER,
    LOGOUT,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOAD_USER_FAIL
} from './actionTypes';

// Load User
export const loadUser = () => async dispatch => {
    
    const config = {
        method: 'get',
        url: 'http://localhost:5000/api/auth',
        headers: {'x-auth-token': [localStorage.token]}
    }

    try {
        const res = await axios(config);

        dispatch({ type: LOAD_USER, payload: res.data });

    } catch (err) {

        if(err) {
            console.log(err);
        }

        dispatch({ type: LOAD_USER_FAIL })
    }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        method: 'post',
        url: 'http://localhost:5000/api/users',
        data: { name, email, password },
        headers: {'Content-Type': 'application/json'}
    };

    try {
        const res = await axios(config);

        dispatch({ type: REGISTER, payload: res.data })
        dispatch(loadUser());
        
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => console.log(error));
        }

        dispatch({ type: REGISTER_FAIL })
    }
};

// Login User
export const login = ({ email, password }) => async dispatch => {
    const config = {
        method: 'post',
        url: 'http://localhost:5000/api/auth',
        data: { email, password },
        headers: {'Content-Type': 'application/json'}
    };

    try {      
        const res = await axios(config);
        
        dispatch({ type: LOGIN, payload: res.data });
        dispatch(loadUser());
        
    } catch (err) {

        if(err) {
            console.log(err.message);
        }
        dispatch({ type: LOGIN_FAIL })
    }
};

// Logout User

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};
