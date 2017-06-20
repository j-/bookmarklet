import * as React from 'react';
import { Dialog } from '@blueprintjs/core';
import './Help.css';

export interface Props {
	title?: string;
}

interface State {
	shown: boolean;
}

export default class Help extends React.Component<Props, State> {
	static defaultProps = {
		title: 'Information',
	};

	state = {
		shown: false,
	};

	render () {
		const { children, title } = this.props;
		const { shown } = this.state;
		return (
			<span className="Help">
				<button
					type="button"
					className="pt-button pt-minimal"
					onClick={this.handleOpen}
				>
					<span className="pt-icon-standard pt-icon-help" />
				</button>
				<Dialog
					iconName="pt-icon-info-sign"
					title={title}
					isOpen={shown}
					onClose={this.handleClose}
				>
					<div className="pt-dialog-body">
						{children}
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
