import * as types from '../../action-types';
import { nominees as initialState } from '../../initialState';

const Storage = (nominees) => {
	localStorage.setItem(
		'nominations',
		JSON.stringify(nominees.length > 0 ? nominees : [])
	);
};
const nomination = (state = initialState, action) => {
	switch (action.type) {
		case types.NOMINATION_START:
			return {
				...state,
				isLoading: true,
			};
		case types.NOMINATION_ADD:
			console.log(state);
			if (
				!state.data.find(
					(item) => item.imdbID === action.payload.imdbID
				) &&
				state.data.length < 5
			) {
				state.data.push({ ...action.payload });
			}
			Storage([...state.data]);

			return {
				...state,
				isLoading: false,
				isSuccessful: true,
				data: [...state.data],
			};
		case types.NOMINATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccessful: true,
				data: action.payload,
			};
		case types.NOMINATION_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case types.NOMINATION_CLEANUP:
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

export default nomination;
