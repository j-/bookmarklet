import * as React from 'react';
import './Bookmarklet.css';

export interface Props {
	source: string;
	title: string;
}

const buildHref = (source: string) => (
	`javascript:void(()=>{${source}})()`
);

const Untitled = () => (
	<em className="pt-text-muted Bookmarklet-untitled" />
);

export default class Bookmarklet extends React.Component<Props, void> {
	render () {
		const { source, title } = this.props;
		const href = buildHref(source);
		return (
			<a
				className="pt-button pt-fill Bookmarklet"
				href={href}
				onClick={this.handleClick}
			>
				<span className="pt-icon-standard pt-icon-document" />
				{title || <Untitled />}
			</a>
		);
	}

	private handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		alert('This link must be dragged to your bookmarks');
	}
}
