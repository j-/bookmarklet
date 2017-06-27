import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from './store/create';
import { loadQuery } from './store/actions';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import '@blueprintjs/core/dist/blueprint.css';
import 'codemirror/lib/codemirror.css';
import './index.css';

const store = createStore();

if (location.search) {
	store.dispatch(
		loadQuery(location.search)
	);
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
