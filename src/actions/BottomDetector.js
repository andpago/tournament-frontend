export const ACTION_AT_BOTTOM = 'ACTION_AT_BOTTOM';

export function atBottomAction() {
	console.log('emitting ACTION_AT_BOTTOM');
	return {
		type: ACTION_AT_BOTTOM,
	};
}