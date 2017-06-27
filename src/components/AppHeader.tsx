import * as React from 'react';
import ShareBookmarkletButton from '../containers/ShareBookmarkletButton';

const WikipediaLink = () => (
	<a
		className="pt-button pt-minimal pt-icon-globe"
		href="https://en.wikipedia.org/wiki/Bookmarklet"
	>
		&lsquo;Bookmarklet&rsquo; on Wikipedia
	</a>
);

const GitHubLink = () => (
	<a
		className="pt-button pt-minimal pt-icon-code"
		href="https://github.com/j-/bookmarklet"
	>
		Fork me on GitHub
	</a>
);

const AppHeader = () => (
	<nav className="pt-navbar pt-dark">
		<div className="pt-navbar-group pt-align-left">
			<div className="pt-navbar-heading">Bookmarklet</div>
		</div>
		<div className="pt-navbar-group pt-align-right">
			<ShareBookmarkletButton />
			<WikipediaLink />
			<GitHubLink />
		</div>
	</nav>
);

export default AppHeader;
