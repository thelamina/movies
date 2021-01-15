import axios from 'axios';
import * as types from '../../action-types';

export const searchMoviesStart = () => ({
	type: types.SEARCH_MOVIES_START,
});

export const searchMoviesSuccess = (payload) => ({
	type: types.SEARCH_MOVIES_SUCCESS,
	payload,
});

export const searchMoviesFail = (payload) => ({
	type: types.SEARCH_MOVIES_FAIL,
	payload,
});

export const searchMoviesCleanup = () => ({
	type: types.SEARCH_MOVIES_CLEANUP,
});

export const searchMovies = (query, page = 1) => async (dispatch) => {
	dispatch(searchMoviesStart());
	try {
		const { data } = await axios.post(
			`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}&type=movie&page=${page}`
		);
		dispatch(searchMoviesSuccess(data));
	} catch (e) {
		dispatch(searchMoviesFail(e));
	}
};
