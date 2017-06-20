import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import Help from './Help';
import 'codemirror/mode/javascript/javascript';
import './AppEditor.css';

const editorOptions = {
	mode: 'javascript',
	lineNumbers: true,
	name: 'bookmarklet-source',
};

const AppEditor = () => (
	<div className="AppEditor">
		<div className="pt-form-group AppEditor-fill-height">
			<span className="pt-label">
				<strong>Step 2</strong>: Set the source of the bookmarklet
				<Help title="Bookmarklet source">
					Contains the JavaScript code to be executed when this bookmarklet is clicked.
				</Help>
			</span>
			<div className="pt-form-content AppEditor-fill-height">
				<div className="pt-card AppEditor-fill-height">
					<CodeMirror
						options={editorOptions}
					/>
				</div>
			</div>
		</div>
	</div>
);

export default AppEditor;
