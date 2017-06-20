import { Action } from 'redux';

export interface SetTitleAction extends Action {
	type: 'SET_TITLE';
	payload: {
		title: string;
	};
}

export const isSetTitleAction = (action: Action): action is SetTitleAction => (
	action.type === 'SET_TITLE'
);

export const setTitle = (title: string): SetTitleAction => ({
	type: 'SET_TITLE',
	payload: {
		title,
	},
});

export interface SetSourceAction extends Action {
	type: 'SET_SOURCE';
	payload: {
		source: string;
	};
}

export const isSetSourceAction = (action: Action): action is SetSourceAction => (
	action.type === 'SET_SOURCE'
);

export const setSource = (source: string): SetSourceAction => ({
	type: 'SET_SOURCE',
	payload: {
		source,
	},
});
