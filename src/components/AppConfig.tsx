import * as React from 'react';
import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';
import './AppConfig.css';

const AppConfig = () => (
	<FlexContainer row={true}>
		<FlexItem flexGrow={1}>
			<div className="pt-form-group AppConfig-item">
				<label className="pt-label" htmlFor="bookmarklet-title">
					Step 1: Choose a title for your bookmarklet
				</label>
				<div className="pt-form-content">
					<input
						id="bookmarklet-title"
						className="pt-input pt-fill"
						type="text"
						placeholder="Leave blank for no title"
						style={{ width: '100%' }}
					/>
				</div>
			</div>
		</FlexItem>
		<FlexItem flexGrow={1}>
			<div className="pt-form-group AppConfig-item">
				<label className="pt-label">
					Step 3: Drag this link to your bookmarks
				</label>
				<div className="pt-form-content">
					<a
						className="pt-button pt-fill"
						href="javascript:alert('Hello world');"
						style={{ textAlign: 'left' }}
					>
						<span className="pt-icon-standard pt-icon-document" />
						Bookmarklet
					</a>
				</div>
			</div>
		</FlexItem>
	</FlexContainer>
);

export default AppConfig;
