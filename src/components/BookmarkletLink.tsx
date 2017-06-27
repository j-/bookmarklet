import * as React from 'react';

export interface Props {
	link: string;
}

export default class BookmarkletLink extends React.Component<Props, void> {
	private input: HTMLInputElement;

	componentDidMount () {
		this.input.select();
	}

	render () {
		const { link } = this.props;
		return (
			<input
				ref={(el) => this.input = el}
				className="pt-input pt-fill"
				type="text"
				value={link}
				readOnly={true}
				autoFocus={true}
			/>
		);
	}
}
