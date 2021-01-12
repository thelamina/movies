import { combineReducers } from 'redux';
import searchMovies from './search-movies';

const rootReducer = combineReducers({
	searchMovies,
});

export default rootReducer;
