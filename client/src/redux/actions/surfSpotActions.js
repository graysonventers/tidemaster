import {
    CLEAR_SURF_SPOT,
    GET_SURF_SPOT,
    GET_SURF_SPOTS,
    LOAD_SURF_SPOT_FAIL
} from './actionTypes';

import dataCollection from '../../sampleData/dataCollection.json';

// Get SurfSpot Data by ID
export const getSurfSpot = (id) => dispatch => {

    try {
        const res = dataCollection.map(spot => {
            let spotId = spot.surfSpotId;

            if(id === spotId) {
                return spot;
            } else {
                console.log('Surf Spot Not Found');
            }
        });
        
        console.log(res);

        
        dispatch({ type: GET_SURF_SPOT, payload: res.data });

    } catch (err) {
        dispatch({ type: LOAD_SURF_SPOT_FAIL, payload: err });        
    }
};