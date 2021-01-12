import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Search } from '../components';
import { searchMovies } from '../store/actions/search-movies';

import logo from '../assets/icons/search.svg';

const SearchContainer = () => {
	const [query, setQuery] = useState('');

	const dispatch = useDispatch();

	const handleSearch = () => {
		try {
			if (query) {
				dispatch(searchMovies(query));
			}
		} catch (ex) {
			console.log(ex);
		}
	};

	return (
		<Search>
			<Search.Input
				placeholder='Search for movies...'
				value={query}
				onChange={({ target }) => setQuery(target.value)}
				onKeyUp={handleSearch}
			/>
			<Search.Button>
				<Search.Image src={logo} />
			</Search.Button>
		</Search>
	);
};

export default SearchContainer;
