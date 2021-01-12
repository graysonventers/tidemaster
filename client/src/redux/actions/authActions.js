import axios from 'axios';

import {
    LOGIN,
    REGISTER,
    LOGOUT
} from './actionTypes';

// Register User
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {'Content-Type': 'application/json'}
    };

    const body = { name, email, password };

    try {
        const res = await axios.post('http://localhost:5000/api/users', body, config);

        dispatch({ type: REGISTER, payload: res.data })

        console.log('register action success')

    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => console.log(error));
        }
    }

};

// Login User
export const login = (email, password) => dispatch => {

};

// Logout User

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};
