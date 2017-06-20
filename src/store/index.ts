import { Action } from 'redux';

import {
	isSetTitleAction,
	isSetSourceAction,
} from './actions';

export interface ReducerState {
	title: string;
	source: string;
}

const DEFAULT_STATE: ReducerState = {
	title: '',
	source: '',
};

export default (state: ReducerState = DEFAULT_STATE, action: Action): ReducerState => {
	if (isSetTitleAction(action)) {
		return {
			...state,
			title: action.payload.title,
		};
	}

	if (isSetSourceAction(action)) {
		return {
			...state,
			source: action.payload.source,
		};
	}

	return state;
};

export const getTitle = (state: ReducerState) => (
	state.title
);

export const getSource = (state: ReducerState) => (
	state.source
);
