import * as React from 'react';

const AppHeader = () => (
	<nav className="pt-navbar">
		<div className="pt-navbar-group pt-align-left">
			<div className="pt-navbar-heading">Bookmarklet</div>
		</div>
		<div className="pt-navbar-group pt-align-right">
			<a
				className="pt-button pt-minimal pt-icon-code"
				href="https://github.com/j-/bookmarklet"
			>
				Fork me on GitHub
			</a>
		</div>
	</nav>
);

export default AppHeader;
