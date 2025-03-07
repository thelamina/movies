import * as types from '../../action-types';

export const nominationStart = () => ({
	type: types.NOMINATION_START,
});

export const nominationAdd = (payload) => ({
	type: types.NOMINATION_ADD,
	payload,
});

export const nominationRemove = (payload) => ({
	type: types.NOMINATION_REMOVE,
	payload,
});

export const nominationFail = (payload) => ({
	type: types.NOMINATION_FAIL,
	payload,
});

export const nominationCleanup = () => ({
	type: types.NOMINATION_CLEANUP,
});

export const addMovie = (movie) => async (dispatch) => {
	dispatch(nominationStart());
	try {
		dispatch(nominationAdd(movie));
	} catch (e) {
		dispatch(nominationFail(e));
	}
};

export const removeMovie = (movie) => async (dispatch) => {
	dispatch(nominationStart());
	try {
		dispatch(nominationRemove(movie));
	} catch (e) {
		dispatch(nominationFail(e));
	}
};
