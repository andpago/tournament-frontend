import update from 'react-addons-update';
import { ACTION_LOGIN } from '../actions/LoginForm.js';


const initState = {
	username: null,
};

export const loginFormReducer = function(store = initState, action) {
	switch (action.type) {
		case ACTION_LOGIN: {
			return update(store, {
	           username: { $set: action.username },
	        });
		}
		default: {
			return store;
		}
	}
}
