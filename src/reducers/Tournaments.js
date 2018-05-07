import update from 'react-addons-update';
import { ACTION_SET_TOURNAMENTS, ACTION_SET_NEXT_TOURNAMENTS_URL } from '../actions/Tournaments.js';
import { ACTION_AT_BOTTOM } from '../actions/BottomDetector.js';

const PAGE_SIZE = '10';
const NEWS_LOAD_URL = '/api/tournaments?limit=' + PAGE_SIZE + '&offset=0&format=json';

const initState = {
	data: [],
	nextUrl: NEWS_LOAD_URL,
};

export const tournamentsReducer = function(store = initState, action) {
	switch (action.type) {
		case ACTION_SET_TOURNAMENTS: {
			return update(store, {
	           data: { $set: action.data },
	        });
		}
		case ACTION_SET_NEXT_TOURNAMENTS_URL: {
			return update(store, {
	           nextUrl: { $set: action.nextUrl },
	        });
		}
		default: {
			return store;
		}
	}
}

export const lastAction = function(store = null, action) {
	return action;
}