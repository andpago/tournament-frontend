import { combineReducers } from 'redux';
import { newsReducer, lastAction } from './News.js'
import { tournamentsReducer } from './Tournaments.js'
import { loginFormReducer } from './LoginForm.js';

export const initReducers = combineReducers({
    newsReducer,
    tournamentsReducer,
    loginFormReducer,
    lastAction,
});
