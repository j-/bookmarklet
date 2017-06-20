import * as React from 'react';
import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';
import Bookmarklet from '../containers/Bookmarklet';
import Help from './Help';
import './AppConfig.css';

const AppConfig = () => (
	<FlexContainer row={true} style={{ height: '100%' }}>
		<FlexItem flexGrow={1}>
			<span className="pt-form-group AppConfig-item">
				<label className="pt-label" htmlFor="bookmarklet-title">
					<strong>Step 1</strong>: Choose a title for your bookmarklet
					<Help title="Bookmarklet title">
						This is the text that will show in your browser bookmarks.
						Leave this field blank to have an icon only.
					</Help>
				</label>
				<span className="pt-form-content">
					<input
						id="bookmarklet-title"
						className="pt-input pt-fill"
						type="text"
						placeholder="Leave blank for no title"
						style={{ width: '100%' }}
					/>
				</span>
			</span>
		</FlexItem>
		<FlexItem flexGrow={1}>
			<span className="pt-form-group AppConfig-item">
				<span className="pt-label">
					<strong>Step 3</strong>: Drag this link to your bookmarks
					<Help title="Drag to bookmarks">
						Click and drag this link to your bookmarks toolbar or menu.
						You can then click it any time to execute your bookmarklet.
					</Help>
				</span>
				<span className="pt-form-content">
					<Bookmarklet />
				</span>
			</span>
		</FlexItem>
	</FlexContainer>
);

export default AppConfig;
