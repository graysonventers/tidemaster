import {
    CLEAR_SURF_SPOT,
    GET_SURF_SPOT,
    GET_SURF_SPOTS,
    LOAD_SURF_SPOT_FAIL
} from './actionTypes';

import dataCollection from '../../sampleData/dataCollection.json';

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