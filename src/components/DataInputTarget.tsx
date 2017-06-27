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
		const dropData = dropEvents.pluck<DragEvent, DataTransfer>('dataTransfer')
			// Ignore drop events from within the app
			.filter((dt) => dt.getData('application/vnd.skeoh.bookmarklet') === '');
		const pasteData = pasteEvents.pluck<ClipboardEvent, DataTransfer>('clipboardData');
		// JS source copy+pasted or drag+dropped into the app
		const sourceData = merge(dropData, pasteData)
			.map((dt) => dt.getData('text/plain'))
			.map((text) => text.replace(/^javascript:/, ''))
			.map((ugly) => beautify(ugly));

		this.dndSubscription = dragAndDropEvents
			.subscribe((e) => e.preventDefault());
		this.dataSubscription = sourceData
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
