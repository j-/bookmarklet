import React from 'react';

const buildHref = (source) => (
	`javascript:void(()=>{${source}})()`
);

const Bookmarklet = ({ source, children }) => (
	<a
		className="bookmarklet"
		href={ buildHref(source) }
	>
		{ children }
	</a>
);

export default Bookmarklet;
