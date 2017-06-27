import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';

export interface Props {
	value: string;
	onChange: (source: string) => void;
}

// Isn't currently exposed by `react-codemirror`
interface ReactCodeMirror {
	getCodeMirror: () => CodeMirror.Editor;
}

const editorOptions = {
	mode: 'javascript',
	lineNumbers: true,
	name: 'bookmarklet-source',
};

export default class BookmarkletSource extends React.Component<Props, void> {
	private rcm: Partial<ReactCodeMirror>;

	componentWillReceiveProps (props: Props) {
		const { rcm } = this;
		if (typeof rcm.getCodeMirror !== 'function') {
			return;
		}
		const cm = rcm.getCodeMirror();
		cm.setValue(props.value);
	}

	render () {
		const { value, onChange } = this.props;

		return (
			<CodeMirror
				ref={this.setRef}
				options={editorOptions}
				value={value}
				onChange={onChange}
			/>
		);
	}

	private setRef = (rcm: Partial<ReactCodeMirror>) => this.rcm = rcm;
}
