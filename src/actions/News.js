export const ACTION_SET_POSTS = 'ACTION_SET_POSTS';

export function setPosts(data) {
	return {
		type: ACTION_SET_POSTS,
		data,
	};
}