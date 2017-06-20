import * as React from 'react';
import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import './App.css';

const App = () => (
	<div className="App">
		<FlexContainer column={true} style={{ height: '100%' }}>
			<FlexItem>
				<AppHeader />
			</FlexItem>
			<FlexItem flexGrow={1} style={{ position: 'relative' }}>
				<AppBody />
			</FlexItem>
		</FlexContainer>
	</div>
);

export default App;
