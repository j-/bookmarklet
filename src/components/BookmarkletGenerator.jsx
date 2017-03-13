import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import Bookmarklet from './Bookmarklet';

import 'codemirror/mode/javascript/javascript';

export default class BookmarkletGenerator extends Component {
	constructor (props) {
		super(props);
		this.state = {
			source: '',
			title: 'Untitled bookmarklet',
		};
		this.editorOptions = {
			mode: 'javascript',
			lineNumbers: true,
		};
		this.updateSource = this.updateSource.bind(this);
		this.updateTitle = this.updateTitle.bind(this);
	}

	updateSource (source) {
		this.setState({
			source,
		});
	}

	updateTitle (e) {
		const title = e.target.value;
		this.setState({
			title,
		});
	}

	render () {
		const { source, title } = this.state;
		return (
			<div className="bookmarklet-generator">
				<div className="source-container">
					<CodeMirror
						value={ source }
						onChange={ this.updateSource }
						options={ this.editorOptions }
					/>
				</div>
				<div className="title-container">
					<label
						className="bookmarklet-title-label"
						htmlFor="bookmarklet-title"
					>
						Title
					</label><br />
					<input
						type="text"
						id="bookmarklet-title"
						className="bookmarklet-title"
						placeholder="Bookmarklet title"
						value={ title }
						onChange={ this.updateTitle }
					/>
				</div>
				<div className="bookmarklet-container">
					<Bookmarklet source={ source }>{ title }</Bookmarklet>
					<p>Drag this link to your bookmarks.</p>
				</div>
			</div>
		);
	}
}
