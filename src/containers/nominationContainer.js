import { useContext } from 'react';
import { Nomination } from '../components';
import { DrawerContext } from '../App';

const NominationContainer = () => {
	const context = useContext(DrawerContext);
	return (
		<Nomination show={context.drawerOpen}>
			<Nomination.Button onClick={context.drawerToggler} />
			<h1>Hello, I'm sliding!</h1>
		</Nomination>
	);
};

export default NominationContainer;
