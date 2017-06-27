import * as React from 'react';
import './Bookmarklet.css';

const uglify = require('uglifyjs-browser');

export interface Props {
	source: string;
	title: string;
}

interface State {
	href: string;
}

const minify = (src: string): string => {
	try {
		let ast = uglify.parse(src);
		ast.figure_out_scope();
		const compressor = uglify.Compressor();
		ast = ast.transform(compressor);

		ast.figure_out_scope();
		ast.compute_char_frequency();
		ast.mangle_names();

		return ast.print_to_string();
	} catch (err) {
		return '';
	}
};

const buildHref = (source: string) => (
	`javascript:${minify(source)}`
);

const Untitled = () => (
	<em className="pt-text-muted Bookmarklet-untitled" />
);

export default class Bookmarklet extends React.Component<Props, State> {
	state = {
		href: '',
	};

	componentWillReceiveProps (props: Props) {
		if (props.source !== this.props.source) {
			// Source has changed
			// Invalidate href
			this.setState(() => ({
				href: '',
			}));
		}
	}

	render () {
		const { title } = this.props;
		const { href } = this.state;
		return (
			<a
				className="pt-button pt-fill Bookmarklet"
				href={href}
				onMouseOver={this.handleMouseDown}
				onClick={this.handleClick}
				onDragStart={this.handleDragStart}
			>
				<span className="pt-icon-standard pt-icon-document" />
				{title || <Untitled />}
			</a>
		);
	}

	private handleMouseDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (this.state.href) {
			// Already generated href
			// Exit early
			return;
		}
		const { source } = this.props;
		this.setState(() => ({
			href: buildHref(source),
		}));
	}

	private handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		alert('This link must be dragged to your bookmarks');
	}

	private handleDragStart = (e: React.DragEvent<HTMLAnchorElement>) => {
		e.dataTransfer.setData('application/vnd.skeoh.bookmarklet', this.state.href);
	}
}
