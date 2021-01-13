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
			if (state.data.length < 5) {
				if (
					!state.data.find((m) => m.imdbID === action.payload.imdbID)
				) {
					state.data.push({ ...action.payload });
				}
			}
			Storage(state.data);

			return {
				...state,
				isLoading: false,
				isSuccessful: true,
				data: [...state.data],
			};
		case types.NOMINATION_REMOVE:
			const remover = state.data.filter(
				(m) => m.imdbID !== action.payload.imdbID
			);
			Storage(remover);
			return {
				...state,
				isLoading: false,
				isSuccessful: true,
				data: [...remover],
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
