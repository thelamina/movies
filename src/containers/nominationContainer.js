import { useContext } from 'react';
import { Loading, Nomination } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { DrawerContext } from '../App';
import { removeMovie } from '../store/actions/nomination';
import { toast } from 'react-toastify';

const NominationContainer = () => {
	const dispatch = useDispatch();
	const context = useContext(DrawerContext);
	const nominationState = useSelector((state) => state.nomination);
	const { data, isLoading } = nominationState;

	const removeMovieHandler = (movie) => {
		try {
			if (movie) {
				dispatch(removeMovie(movie));
				toast.info(`Movie: ${movie.Title} removed`, {
					position: 'top-center',
					autoClose: 3000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		} catch (ex) {
			console.error(ex);
		}
	};
	if (isLoading) {
		return <Loading />;
	} else {
		return (
			<Nomination show={context.drawerOpen}>
				<Nomination.Close onClick={context.drawerToggler} />
				{data.length > 0 ? (
					<>
						<Nomination.Title>Nomination List</Nomination.Title>
						<Nomination.List>
							{data?.map((mov) => (
								<Nomination.ListItem key={mov.imdbID}>
									<Nomination.Image
										src={mov.Poster}
										onError={({ target }) =>
											(target.src =
												'https://via.placeholder.com/500x700/757575/ffffff.png?text=NO+IMAGE')
										}
									/>
									<Nomination.Content>
										<Nomination.Text>
											<Nomination.Bold>
												Title:{' '}
											</Nomination.Bold>{' '}
											{mov.Title}
										</Nomination.Text>
										<Nomination.Text>
											<Nomination.Bold>
												Year:{' '}
											</Nomination.Bold>
											{mov.Year}
										</Nomination.Text>
										<Nomination.Text>
											<Nomination.Bold>
												ID:{' '}
											</Nomination.Bold>
											{mov.imdbID}
										</Nomination.Text>

										<Nomination.Button
											onClick={() =>
												removeMovieHandler(mov)
											}
										>
											Remove
										</Nomination.Button>
									</Nomination.Content>
								</Nomination.ListItem>
							))}
						</Nomination.List>
					</>
				) : (
					<Nomination.Empty>
						You have not nominated any movie(s)
					</Nomination.Empty>
				)}
			</Nomination>
		);
	}
};

export default NominationContainer;
