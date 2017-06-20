import * as React from 'react';
import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';
import AppConfig from './AppConfig';
import AppEditor from './AppEditor';

const AppBody = () => (
	<FlexContainer column={true} style={{ width: '100%', height: '100%', position: 'absolute' }}>
		<FlexItem>
			<AppConfig />
		</FlexItem>
		<FlexItem flexGrow={1} style={{ position: 'relative' }}>
			<AppEditor />
		</FlexItem>
	</FlexContainer>
);

export default AppBody;
