import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	flexGrow?: number;
}

export default class FlexItem extends React.Component<Props, void> {
	public static defaultProps: Props = {
		flexGrow: 0,
	};

	render () {
		const { props } = this;
		const { style, flexGrow, ...rest } = props;
		return (
			<div
				{...rest}
				style={{
					...style,
					flexGrow,
				}}
			/>
		);
	}
}
