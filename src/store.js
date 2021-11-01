import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { searchSetReducer, robotsGetReducer } from './reducers/searchSetReducer';
import thunk from 'redux-thunk';

const logger = createLogger();

const rootReducer = combineReducers({
    searchSet: searchSetReducer,
    robotsGet: robotsGetReducer
});

const middleware = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;