import React, { useContext } from 'react';
import { Header } from '../components';
import { DrawerContext } from '../App';

const HeaderContainer = () => {
	const context = useContext(DrawerContext);
	return (
		<Header>
			<Header.Logo
				title='The Shoppies'
				sub='Movie awards for entrepreneurs'
			/>
			<Header.Link onClick={context.drawerToggler}>Nominees</Header.Link>
		</Header>
	);
};

export default HeaderContainer;
