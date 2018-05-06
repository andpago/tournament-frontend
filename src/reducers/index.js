import { combineReducers } from 'redux';
import { newsReducer } from './News.js'

export const initReducers = combineReducers({
    newsReducer,
});
