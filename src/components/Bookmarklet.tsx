import * as React from 'react';
import './Bookmarklet.css';

const uglify = require('uglifyjs-browser');

export interface Props {
	source: string;
	title: string;
}

const minify = (src: string): string => {
	let ast = uglify.parse(src);
	ast.figure_out_scope();
	const compressor = uglify.Compressor();
	ast = ast.transform(compressor);

	ast.figure_out_scope();
	ast.compute_char_frequency();
	ast.mangle_names();

	return ast.print_to_string();
};

const buildHref = (source: string) => (
	`javascript:${minify(source)}`
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
