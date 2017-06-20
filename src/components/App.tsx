import * as React from 'react';
import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';
import './App.css';

const App = () => (
	<div className="App">
		<FlexContainer column={true} style={{ height: '100%' }}>
			<FlexItem>
				<h1>Bookmarklet</h1>
			</FlexItem>
			<FlexItem flexGrow={1}>
				Content
			</FlexItem>
		</FlexContainer>
	</div>
);

export default App;
