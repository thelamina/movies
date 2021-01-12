import React from 'react';
import { useSelector } from 'react-redux';

import { Result, Loading } from '../components';

import heart from '../assets/icons/heart.svg';

const ResultContainer = React.memo(() => {
	const searchMoviesState = useSelector(({ searchMovies }) => searchMovies);
	const { data, isLoading } = searchMoviesState;

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
									src={
										movie.Poster === 'N/A'
											? 'https://via.placeholder.com/500x700/757575/ffffff.png?text=NO+IMAGE'
											: movie.Poster
									}
								/>
								<Result.Title>{movie.Title}</Result.Title>
								<Result.Text>{movie.Year}</Result.Text>
								<Result.Button src={heart} />
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
