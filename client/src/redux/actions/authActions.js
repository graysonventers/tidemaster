import axios from 'axios';

import {
    LOAD_USER,
    LOGIN,
    REGISTER,
    LOGOUT,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOAD_USER_FAIL,
    ADD_FAVORITE_SPOT,
    DELETE_FAVORITE_SPOT,
    UPDATE_FAVORITE_SPOT_FAIL
} from './actionTypes';

// Load User
export const loadUser = () => async dispatch => {
    
    const config = {
        method: 'get',
        url: '/api/auth',
        headers: {'x-auth-token': [localStorage.token]}
    }

    try {
        const res = await axios(config);

        dispatch({ type: LOAD_USER, payload: res.data });

    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL })
    }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        method: 'post',
        url: '/api/users',
        data: { name, email, password },
        headers: {'Content-Type': 'application/json'}
    };

    try {
        const res = await axios(config);

        dispatch({ type: REGISTER, payload: res.data })
        dispatch(loadUser());
        
    } catch (error) {

        if (error.response) {
            console.log(error.response.data.message)
            alert(error.response.data.message);
        }

        dispatch({ type: REGISTER_FAIL })
    }
};

// Login User
export const login = ({ email, password }) => async dispatch => {
    const config = {
        method: 'post',
        url: '/api/auth',
        data: { email, password },
        headers: {'Content-Type': 'application/json'}
    };

    try {      
        const res = await axios(config);
        
        dispatch({ type: LOGIN, payload: res.data });
        dispatch(loadUser());
        
    } catch (error) {

        if (error.response) {
            console.log(error.response.data.message)
            alert(error.response.data.message);
        }
        dispatch({ type: LOGIN_FAIL })
    }
};

// Logout User

export const logout = () => dispatch => {
    sessionStorage.clear();

    dispatch({ type: LOGOUT });
};

// Add surfSpot to user's favoriteSpots
export const addFavoriteSpot = id => async dispatch => {
    const stringId = id.toString();
    const config = {
        method: 'put',
        url: '/api/users',
        data: { favoriteSpots: stringId },
        headers: {
            'x-auth-token': [localStorage.token],
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios(config);
        dispatch({ type: ADD_FAVORITE_SPOT, payload: res.data })

    } catch (error) {
        if (error.response) {
            console.log(error.response.data.message)
            alert(error.response.data.message);
        }

        dispatch({ type: UPDATE_FAVORITE_SPOT_FAIL });
    }
};


// Delete surfSpot from user's favoriteSpots
export const deleteFavoriteSpot = id => async dispatch => {
    const stringId = id.toString();
    const config = {
        method: 'delete',
        url: '/api/users',
        data: { favoriteSpots: stringId },
        headers: {
            'x-auth-token': [localStorage.token],
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios(config);

        dispatch({ type: DELETE_FAVORITE_SPOT, payload: res.data })
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.message)
            alert(error.response.data.message);
        }

        dispatch({ type: UPDATE_FAVORITE_SPOT_FAIL })
    }
};