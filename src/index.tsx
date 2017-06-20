import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from './store/create';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import '@blueprintjs/core/dist/blueprint.css';
import 'codemirror/lib/codemirror.css';
import './index.css';

const store = createStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
