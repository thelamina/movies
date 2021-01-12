import { useContext } from 'react';
import { Nomination } from '../components';
import { useSelector } from 'react-redux';
import { DrawerContext } from '../App';

const NominationContainer = () => {
	const nominationState = useSelector((state) => state.nomination);
	const { data } = nominationState;
	const context = useContext(DrawerContext);
	return (
		<Nomination show={context.drawerOpen}>
			<Nomination.Close onClick={context.drawerToggler} />
			<Nomination.Title>Nomination List</Nomination.Title>
			<Nomination.List>
				{data.map((mov) => (
					<Nomination.ListItem>
						<Nomination.Image
							src={mov.Poster}
							onError={({ target }) =>
								(target.src =
									'https://via.placeholder.com/500x700/757575/ffffff.png?text=NO+IMAGE')
							}
						/>
						<Nomination.Content>
							<Nomination.Text>
								<Nomination.Bold>Title: </Nomination.Bold>{' '}
								{mov.Title}
							</Nomination.Text>
							<Nomination.Text>
								<Nomination.Bold>Year: </Nomination.Bold>
								{mov.Year}
							</Nomination.Text>
							<Nomination.Text>
								<Nomination.Bold>ID: </Nomination.Bold>
								{mov.imdbID}
							</Nomination.Text>

							<Nomination.Button>Remove</Nomination.Button>
						</Nomination.Content>
					</Nomination.ListItem>
				))}
			</Nomination.List>
		</Nomination>
	);
};

export default NominationContainer;
