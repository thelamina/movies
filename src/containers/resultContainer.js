import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import { Result, Loading } from '../components';
import { addMovie } from '../store/actions/nomination';

const ResultContainer = React.memo(() => {
	const dispatch = useDispatch();
	const toastConfig = {
		position: 'top-center',
		autoClose: 3000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	};
	const searchMoviesState = useSelector(({ searchMovies }) => searchMovies);
	const nomineeState = useSelector(({ nomination }) => nomination);
	const { data, isLoading } = searchMoviesState;
	const nominee = nomineeState;

	const addMovieHandler = (movie) => {
		try {
			if (movie) {
				dispatch(addMovie(movie));
				if (nominee.data.length === 5) {
					toast.info(`You have nominated 5 movies`, toastConfig);
				} else {
					toast.success(
						`${movie.Title.toUpperCase()} successfully nominated`,
						toastConfig
					);
				}
			}
		} catch (ex) {
			console.log(ex);
		}
	};

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
									disabled={nominee.data?.find(
										(m) => m.imdbID === movie.imdbID
									)}
									onClick={() => addMovieHandler(movie)}
								/>
							</Result.ListItem>
						))
					) : (
						<p style={{ textAlign: 'center' }}>
							Search for your favourite movie(s) to nominate
						</p>
					)}
				</Result.List>
			</Result>
		);
	}
});

export default ResultContainer;
