import * as React from 'react';
import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';
import AppConfig from './AppConfig';

const AppHeader = () => (
	<FlexContainer column={true} style={{ height: '100%' }}>
		<FlexItem>
			<AppConfig />
		</FlexItem>
	</FlexContainer>
);

export default AppHeader;
