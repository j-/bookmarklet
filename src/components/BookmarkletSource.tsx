import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';

export interface Props {
	value: string;
	onChange: (source: string) => void;
}

const editorOptions = {
	mode: 'javascript',
	lineNumbers: true,
	name: 'bookmarklet-source',
};

export default class BookmarkletSource extends React.Component<Props, void> {
	render () {
		const { value, onChange } = this.props;

		return (
			<CodeMirror
				options={editorOptions}
				value={value}
				onChange={onChange}
			/>
		);
	}
}
