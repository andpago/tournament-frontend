export const ACTION_LOGIN = 'ACTION_LOGIN';

export const loginAction = username => ({
	type: ACTION_LOGIN,
	username: username,
});