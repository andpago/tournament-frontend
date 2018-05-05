import { combineReducers } from 'redux';


const emptyReducer = function(store = {}, action) {
    return store;
}

export const initReducers = combineReducers({
    emptyReducer,
});
