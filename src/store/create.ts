import {
	createStore as createReduxStore,
	applyMiddleware,
	Middleware,
	GenericStoreEnhancer,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './';

const LOCAL_STORAGE_KEY: string = 'bookmarklet-state';

const getState = () => {
	try {
		const stringified = localStorage.getItem(LOCAL_STORAGE_KEY);
		return JSON.parse(stringified || '');
	} catch (err) {
		return undefined;
	}
};

const setState = (state: {}) => {
	try {
		const stringified = JSON.stringify(state);
		localStorage.setItem(LOCAL_STORAGE_KEY, stringified);
	} catch (err) {
		// Ignore
	}
};

export const createStore = () => {
	const middleware: Middleware[] = [];
	const enhancers: GenericStoreEnhancer[] = [];
	const initialState = getState();
	const store = createReduxStore(rootReducer, initialState, composeWithDevTools(
		applyMiddleware(...middleware),
		...enhancers
	));
	store.subscribe(() => setState(store.getState()));
	return store;
};
