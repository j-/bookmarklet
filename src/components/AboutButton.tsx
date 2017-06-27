import * as React from 'react';
import { Dialog } from '@blueprintjs/core';

interface State {
	shown: boolean;
}

export default class ShareBookmarkletButton extends React.Component<{}, State> {
	state = {
		shown: false,
	};

	render () {
		const { shown } = this.state;
		return (
			<span>
				<button
					type="button"
					className="pt-button pt-minimal pt-icon-help"
					onClick={this.handleOpen}
				>
					<span className="button-text">
						About
					</span>
				</button>
				<Dialog
					iconName="pt-icon-info-sign"
					title="About this app"
					isOpen={shown}
					onClose={this.handleClose}
				>
					<div className="pt-dialog-body">
						Built by <a href="https://skeoh.com/">Jamie Hoeks</a>.
						Uses React, Redux, TypeScript, Blueprint and other cool
						technologies. Check out the {' '}
						<a href="https://github.com/j-/bookmarklet">source code
						on GitHub</a>.
					</div>
					<div className="pt-dialog-footer">
						<div className="pt-dialog-footer-actions">
							<button
								className="pt-button pt-intent-primary"
								onClick={this.handleClose}
							>
								OK
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
}
