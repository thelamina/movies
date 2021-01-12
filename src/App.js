import { useMemo, createContext, useState } from 'react';
import { Home } from './pages';

export const DrawerContext = createContext();
const App = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const drawerToggler = () => {
		setDrawerOpen(!drawerOpen);
	};
	const value = useMemo(() => ({ drawerOpen, drawerToggler }), [drawerOpen]);
	return (
		<DrawerContext.Provider value={value}>
			<Home />
		</DrawerContext.Provider>
	);
};

export default App;
