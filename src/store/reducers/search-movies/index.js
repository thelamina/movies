import * as types from '../../action-types';
import { searchMovies as initialState } from '../../initialState';

const searchMovies = (state = initialState, action) => {
	switch (action.type) {
		case types.SEARCH_MOVIES_START:
			return {
				...state,
				isLoading: true,
			};
		case types.SEARCH_MOVIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccessful: true,
				data: action.payload,
			};
		case types.SEARCH_MOVIES_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case types.SEARCH_MOVIES_CLEANUP:
			return {
				...state,
				isLoading: false,
				isSuccessful: false,
				error: null,
			};
		default:
			return state;
	}
};

export default searchMovies;
