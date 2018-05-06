import { combineReducers } from 'redux';
import { newsReducer, lastAction } from './News.js'

export const initReducers = combineReducers({
    newsReducer,
    lastAction,
});
