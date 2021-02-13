import {createStore, applyMiddleware} from 'redux';

//Other
import {rootReducer} from './rootReducer';
import { composeEnhancers, middleware } from './middleware';

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
