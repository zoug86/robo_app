import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { searchSetReducer } from './reducers/searchSetReducer';


const rootReducer = combineReducers({ searchSet: searchSetReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;