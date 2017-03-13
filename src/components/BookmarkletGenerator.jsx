import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import Bookmarklet from './Bookmarklet';

import 'codemirror/mode/javascript/javascript';

const LOCAL_STORAGE_KEY = 'bookmarklet-generator-state';

export default class BookmarkletGenerator extends Component {
	constructor (props) {
		super(props);
		this.state = this.retrieveState() || {
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

	persistState (state) {
		try {
			const serialized = JSON.stringify(state);
			localStorage.setItem(LOCAL_STORAGE_KEY, serialized);
		} catch (err) {
			// Ignore errors
		}
	}

	retrieveState () {
		try {
			const serialized = localStorage.getItem(LOCAL_STORAGE_KEY);
			return JSON.parse(serialized);
		} catch (err) {
			return null;
		}
	}

	updateSource (source) {
		this.setState({
			source,
		}, () => this.persistState(this.state));
	}

	updateTitle (e) {
		const title = e.target.value;
		this.setState({
			title,
		}, () => this.persistState(this.state));
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
