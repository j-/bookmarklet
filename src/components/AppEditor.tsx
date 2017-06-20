import * as React from 'react';
import Help from './Help';
import BookmarkletSource from '../containers/BookmarkletSource';
import './AppEditor.css';

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
					<BookmarkletSource />
				</div>
			</div>
		</div>
	</div>
);

export default AppEditor;
