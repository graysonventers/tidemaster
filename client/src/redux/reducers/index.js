import { combineReducers } from 'redux';
import auth from './auth';
import surf from './surf';

export default combineReducers({
    auth,
    surf
});
