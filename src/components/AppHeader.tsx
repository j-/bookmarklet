import * as React from 'react';
import ShareBookmarkletButton from '../containers/ShareBookmarkletButton';
import AboutButton from './AboutButton';
import './AppHeader.css';

const WikipediaLink = () => (
	<a
		className="pt-button pt-minimal pt-icon-globe"
		href="https://en.wikipedia.org/wiki/Bookmarklet"
	>
		<span className="button-text">
			&lsquo;Bookmarklet&rsquo; on Wikipedia
		</span>
	</a>
);

const GitHubLink = () => (
	<a
		className="pt-button pt-minimal pt-icon-code"
		href="https://github.com/j-/bookmarklet"
	>
		<span className="button-text">
			Fork me on GitHub
		</span>
	</a>
);

const AppHeader = () => (
	<nav className="pt-navbar pt-dark AppHeader">
		<div className="pt-navbar-group pt-align-left">
			<div className="pt-navbar-heading">Bookmarklet</div>
		</div>
		<div className="pt-navbar-group pt-align-right">
			<ShareBookmarkletButton />
			<WikipediaLink />
			<GitHubLink />
			<AboutButton />
		</div>
	</nav>
);

export default AppHeader;
