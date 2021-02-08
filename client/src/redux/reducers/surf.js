import {
    CLEAR_SURF_SPOT,
    GET_SURF_SPOT,
    GET_SURF_SPOTS,
    LOAD_SURF_SPOT_FAIL
} from '../actions/actionTypes';

const initialState = {
    surfSpot: null,
    surfSpots: [],
    loading: true,
    error: null
};

export default function surf (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_SURF_SPOT:
            return {
                ...state,
                surfSpot: payload,
                loading: false
            }
        case GET_SURF_SPOTS: 
            return {
                ...state,
                surfSpots: payload,
                loading: false
            }
        case CLEAR_SURF_SPOT:
            return {
                ...state,
                surfSpot: null,
                loading: false
            }
        case LOAD_SURF_SPOT_FAIL:
            return {
                ...state,
                surfSpot: null,
                surfSpots: [],
                loading: false,
                error: payload
            }
        default:
            return state;
    }
};
