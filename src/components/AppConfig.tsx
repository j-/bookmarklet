import * as React from 'react';
import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';

const AppConfig = () => (
	<FlexContainer row={true}>
		<FlexItem flexGrow={1}>
			Bookmarklet title
		</FlexItem>
		<FlexItem flexGrow={1}>
			Bookmarklet link
		</FlexItem>
	</FlexContainer>
);

export default AppConfig;
