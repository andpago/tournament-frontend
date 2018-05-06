import update from 'react-addons-update';
import { ACTION_SET_POSTS } from '../actions/News.js';

const initState = {
	data: [],
};

export const newsReducer = function(store = initState, action) {
    if (action.type == ACTION_SET_POSTS) {
    	return update(store, {
            data: { $set: action.data },
        });
    } else {
    	return store;
    }
}