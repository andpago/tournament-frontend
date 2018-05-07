export const ACTION_SET_TOURNAMENTS = 'ACTION_SET_TOURNAMENTS';
export const ACTION_SET_NEXT_TOURNAMENTS_URL = 'ACTION_SET_NEXT_TOURNAMENTS_URL';

export function setTournaments(data) {
	return {
		type: ACTION_SET_TOURNAMENTS,
		data,
	};
}

export function setNextTournamentsUrl(nextUrl) {
	return {
		type: ACTION_SET_NEXT_TOURNAMENTS_URL,
		nextUrl,
	};
}