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
	private container: HTMLDivElement;
	private rcm: Partial<ReactCodeMirror>;

	componentWillReceiveProps (props: Props) {
		const { rcm } = this;
		if (typeof rcm.getCodeMirror !== 'function') {
			// Cannot get code mirror instance
			// Exit early
			return;
		}
		if (this.container.contains(document.activeElement)) {
			// Editor is already in focus
			// Exit early
			return;
		}
		const cm = rcm.getCodeMirror();
		cm.setValue(props.value);
	}

	render () {
		const { value, onChange } = this.props;

		return (
			<div ref={this.setContainer} style={{ height: '100%' }}>
				<CodeMirror
					ref={this.setEditor}
					options={editorOptions}
					value={value}
					onChange={onChange}
				/>
			</div>
		);
	}

	private setEditor = (rcm: Partial<ReactCodeMirror>) => this.rcm = rcm;

	private setContainer = (div: HTMLDivElement) => this.container = div;
}
