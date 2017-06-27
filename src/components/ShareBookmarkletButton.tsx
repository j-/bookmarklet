import * as React from 'react';
import { format } from 'url';
import { Dialog } from '@blueprintjs/core';
import BookmarkletLink from './BookmarkletLink';
import { AppToaster } from '../toaster';

const copy = require('clipboard-copy');

export interface Props {
	title: string;
	source: string;
}

interface State {
	shown: boolean;
}

export default class ShareBookmarkletButton extends React.Component<Props, State> {
	state = {
		shown: false,
	};

	render () {
		const { shown } = this.state;
		const link = this.getBookmarkletLink();
		const handleCopy = () => {
			copy(link);
			this.handleClose();
			AppToaster.show({
				message: 'Link copied to clipboard',
				timeout: 2000,
			});
		};
		return (
			<span>
				<button
					type="button"
					className="pt-button pt-minimal pt-icon-share"
					onClick={this.handleOpen}
				>
					Share this Bookmarklet
				</button>
				<Dialog
					iconName="pt-icon-share"
					title="Share this Bookmarklet"
					isOpen={shown}
					onClose={this.handleClose}
				>
					<div className="pt-dialog-body">
						Copy and paste this link:
						<BookmarkletLink link={link} />
					</div>
					<div className="pt-dialog-footer">
						<div className="pt-dialog-footer-actions">
							<button
								className="pt-button"
								onClick={handleCopy}
							>
								Copy link
							</button>
							<button
								className="pt-button"
								onClick={this.handleClose}
							>
								Done
							</button>
						</div>
					</div>
				</Dialog>
			</span>
		);
	}

	private handleOpen = () => {
		this.setState(() => ({
			shown: true,
		}));
	}

	private handleClose = () => {
		this.setState(() => ({
			shown: false,
		}));
	}

	private getBookmarkletLink () {
		const { title, source } = this.props;
		const query = { title, source };

		const url = format({
			...location,
			query,
		});

		return url;
	}
}
