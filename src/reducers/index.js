import { combineReducers } from 'redux';
import { newsReducer, lastAction } from './News.js'
import { tournamentsReducer } from './Tournaments.js'

export const initReducers = combineReducers({
    newsReducer,
    tournamentsReducer,
    lastAction,
});
