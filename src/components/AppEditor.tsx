import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import './AppEditor.css';

const editorOptions = {
	mode: 'javascript',
	lineNumbers: true,
};

const AppEditor = () => (
	<div className="AppEditor">
		<div className="pt-form-group AppEditor-fill-height">
			<label className="pt-label" htmlFor="bookmarklet-source">
				Step 2: Set the source of the bookmarklet
			</label>
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
