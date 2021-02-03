import { combineReducers } from 'redux';
import auth from './auth';
import surfSpot from './surfSpot';

export default combineReducers({
    auth,
    surfSpot
});
