import {combineReducers} from 'redux';

import { userReducer as  user } from '../bus/user/reducer';
import { trackingReducer as tracking } from '../bus/tracking/reducer';

export const rootReducer = combineReducers({
    user,
    tracking,
});
