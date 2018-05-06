import update from 'react-addons-update';
import { ACTION_SET_POSTS, ACTION_SET_NEXT_POSTS_URL } from '../actions/News.js';

const PAGE_SIZE = '10';
const NEWS_LOAD_URL = '/api/news?limit=' + PAGE_SIZE + '&offset=0&format=json';

const initState = {
	data: [],
	nextUrl: NEWS_LOAD_URL,
};

export const newsReducer = function(store = initState, action) {
	switch (action.type) {
		case ACTION_SET_POSTS: {
			return update(store, {
	           data: { $set: action.data },
	        });
		}
		case ACTION_SET_NEXT_POSTS_URL: {
			return update(store, {
	           nextUrl: { $set: action.nextUrl },
	        });
		}
		default: {
			return store;
		}
	}
}