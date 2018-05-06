export const ACTION_SET_POSTS = 'ACTION_SET_POSTS';
export const ACTION_SET_NEXT_POSTS_URL = 'ACTION_SET_NEXT_POSTS_URL';

export function setPosts(data) {
	return {
		type: ACTION_SET_POSTS,
		data,
	};
}

export function setNextUrl(nextUrl) {
	return {
		type: ACTION_SET_NEXT_POSTS_URL,
		nextUrl,
	};
}