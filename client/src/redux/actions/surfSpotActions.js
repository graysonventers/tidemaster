import {
    CLEAR_SURF_SPOT,
    GET_SURF_SPOT,
    GET_SURF_SPOTS,
    LOAD_SURF_SPOT_FAIL
} from './actionTypes';

// Load User
export const getSurfSpot = () => dispatch => {

    try {
        
        dispatch({ type: GET_SURF_SPOT, payload: res.data });

    } catch (err) {
        dispatch({ 
            type: LOAD_SURF_SPOT_FAIL, payload: err 
        });        
    }
};