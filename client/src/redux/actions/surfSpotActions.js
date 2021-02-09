import {
    CLEAR_SURF_SPOT,
    CLEAR_SURF_SPOTS,
    GET_SURF_SPOT,
    GET_SURF_SPOTS,
    LOAD_SURF_SPOT_FAIL
} from './actionTypes';

import dataCollection from '../../sampleData/dataCollection.json';
import axios from 'axios';

// Get SurfSpot Data by ID
export const getSurfSpot = id => dispatch => {
    try {
        let res;
        dataCollection.forEach(spot => {
            if(parseInt(id) === spot.surfSpotId) {
                res = spot;
            }
        });

        dispatch({ type: GET_SURF_SPOT, payload: res });

    } catch (err) {
        dispatch({ type: LOAD_SURF_SPOT_FAIL, payload: err });        
    }
};

// Get user's favorite surfSpots
export const getSurfSpots = () => async dispatch => {
    const config = {
        method: 'get',
        url: 'http://localhost:5000/api/users',
        headers: {'x-auth-token': [localStorage.token]}
    }

    try {
        let res = await axios(config);
        let updatedRes = [];

        dataCollection.forEach(item => {
            res.data.forEach(item2 => {
                if(item.surfSpotId === parseInt(item2)) {
                    updatedRes.push(item);
                }
            })
        });
        
        dispatch({ type: GET_SURF_SPOTS, payload: updatedRes });

    } catch (err) {
        dispatch({ type: LOAD_SURF_SPOT_FAIL })    
    }
};

// Clear single surf spot
export const clearSurfSpot = () => dispatch => {
    try {
        dispatch({ type: CLEAR_SURF_SPOT })
    } catch (err) {
        
    }

};

// Clear all surfSpots
export const clearSurfSpots = () => dispatch => {
    try {
        dispatch({ type: CLEAR_SURF_SPOTS })
    } catch (err) {
        
    }
};