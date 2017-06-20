import * as React from 'react';

export interface Directions {
	row?: boolean;
	rowReverse?: boolean;
	column?: boolean;
	columnReverse?: boolean;
}

export interface Props extends React.HTMLAttributes<HTMLDivElement>, Directions {
}

const getFlexDirection = ({ row, rowReverse, column, columnReverse }: Directions) => {
	if (row) {
		return 'row';
	} else if (rowReverse) {
		return 'row-reverse';
	} else if (column) {
		return 'column';
	} else if (columnReverse) {
		return 'column-reverse';
	} else {
		return undefined;
	}
};

export default class FlexContainer extends React.Component<Props, void> {
	render () {
		const { props } = this;
		const {
			row,
			rowReverse,
			column,
			columnReverse,
			style,
			...rest
		} = props;
		const display = 'flex';
		const flexDirection = getFlexDirection({
			row,
			rowReverse,
			column,
			columnReverse,
		});
		return (
			<div
				{...rest}
				style={{
					...style,
					display,
					flexDirection,
				}}
			/>
		);
	}
}
