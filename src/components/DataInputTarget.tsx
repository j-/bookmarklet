import * as React from 'react';
import { Observable, Subscription } from 'rxjs';

const { fromEvent, merge } = Observable;

export interface Props {
	onData: (data: string) => void;
}

export default class DataInputTarget extends React.Component<Props, void> {
	private dndSubscription: Subscription;
	private dtSubscription: Subscription;

	componentWillMount () {
		const { onData } = this.props;

		// Event streams
		const pasteEvents = fromEvent<ClipboardEvent>(window, 'paste');
		const dragEvents = fromEvent<DragEvent>(window, 'dragover');
		const dropEvents = fromEvent<DragEvent>(window, 'drop');
		const dragAndDropEvents = merge(dragEvents, dropEvents);

		// Get transfer data from events
		const dropData = dropEvents.pluck<DragEvent, DataTransfer>('dataTransfer');
		const pasteData = pasteEvents.pluck<ClipboardEvent, DataTransfer>('clipboardData');
		const dataTransfers = merge(dropData, pasteData);
		const plainText = dataTransfers.map((dt) => dt.getData('text/plain'));

		this.dndSubscription = dragAndDropEvents
			.subscribe((e) => e.preventDefault());
		this.dtSubscription = plainText
			.subscribe((text) => onData(text));
	}

	componentWillUnmount () {
		this.dndSubscription.unsubscribe();
		this.dtSubscription.unsubscribe();
	}

	render () {
		return null;
	}
}
