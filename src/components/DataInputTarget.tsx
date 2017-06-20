import * as React from 'react';
import { Observable, Subscription } from 'rxjs';
import { js_beautify as beautify } from 'js-beautify';

const { fromEvent, merge } = Observable;

export interface Props {
	onData: (data: string) => void;
}

export default class DataInputTarget extends React.Component<Props, void> {
	private dndSubscription: Subscription;
	private dataSubscription: Subscription;

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
		const noJavaScript = plainText.map((text) => text.replace(/^javascript:/, ''));
		const beautified = noJavaScript.map((ugly) => beautify(ugly));

		this.dndSubscription = dragAndDropEvents
			.subscribe((e) => e.preventDefault());
		this.dataSubscription = beautified
			.subscribe((text) => onData(text));
	}

	componentWillUnmount () {
		this.dndSubscription.unsubscribe();
		this.dataSubscription.unsubscribe();
	}

	render () {
		return null;
	}
}
