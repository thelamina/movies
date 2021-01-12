import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import GlobalStyle from './styles/global-styles';

const root = document.getElementById('root');

render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<App />
		</Provider>
	</React.StrictMode>,
	root
);
