import { combineReducers } from 'redux';
import searchMovies from './search-movies';
import nomination from './nomination';

const rootReducer = combineReducers({
	searchMovies,
	nomination,
});

export default rootReducer;
