import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Result, Loading } from '../components';
import { addMovie } from '../store/actions/nomination';

import heart from '../assets/icons/heart.svg';

const ResultContainer = React.memo(() => {
	const dispatch = useDispatch();

	const nomineesList = JSON.parse(localStorage.getItem('nominations'));

	console.log(nomineesList);
	const searchMoviesState = useSelector(({ searchMovies }) => searchMovies);
	const { data, isLoading } = searchMoviesState;

	const addMovieHandler = (movie) => {
		// console.log(movie);
		try {
			if (movie) {
				dispatch(addMovie(movie));
			}
		} catch (ex) {
			console.log(ex);
		}
	};
	console.log(data);

	if (isLoading) {
		return <Loading />;
	} else {
		return (
			<Result>
				<Result.List>
					{data && data.Search ? (
						data.Search?.map((movie) => (
							<Result.ListItem key={movie.imdbID}>
								<Result.Image
									src={movie.Poster}
									onError={({ target }) =>
										(target.src =
											'https://via.placeholder.com/500x700/757575/ffffff.png?text=NO+IMAGE')
									}
								/>
								<Result.Title>{movie.Title}</Result.Title>
								<Result.Text>{movie.Year}</Result.Text>
								<Result.Button
									disabled={nomineesList?.includes(movie)}
									onClick={() => addMovieHandler(movie)}
								/>
							</Result.ListItem>
						))
					) : (
						<p style={{ textAlign: 'center' }}>
							Type in to the search box
						</p>
					)}
				</Result.List>
			</Result>
		);
	}
});

export default ResultContainer;
