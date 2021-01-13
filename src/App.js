import { useMemo, createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
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
			<ToastContainer />
		</DrawerContext.Provider>
	);
};

export default App;
