import { ApolloProvider } from '@apollo/client';
import { bobaExchangeClient } from 'apollo/client';
import 'inter-ui';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { queryClient } from './core/query';
import './i18n';
import App from './pages/App';
import store from './state';
import ApplicationUpdater from './state/application/updater';
import ListUpdater from './state/lists/updater';
import UserUpdater from './state/user/updater';
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme';

function Updaters() {
	return (
		<>
			<ListUpdater />
			<UserUpdater />
			<ApplicationUpdater />
		</>
	);
}

ReactDOM.render(
	<StrictMode>
		<FixedGlobalStyle />
		<ApolloProvider client={bobaExchangeClient}>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<Updaters />
					<ThemeProvider>
						<ThemedGlobalStyle />
						<HashRouter>
							<App />
						</HashRouter>
					</ThemeProvider>
				</Provider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</ApolloProvider>
	</StrictMode>,
	document.getElementById('root')
);
