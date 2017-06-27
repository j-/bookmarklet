import * as React from 'react';
import { Observable, Subscription } from 'rxjs';
import { js_beautify as beautify } from 'js-beautify';

const { fromEvent, merge } = Observable;

export interface Props {
	onData: (data: string) => void;
}

// Event streams
const dragEvents = fromEvent<DragEvent>(window, 'dragover');
const dropEvents = fromEvent<DragEvent>(window, 'drop');
const dragAndDropEvents = merge(dragEvents, dropEvents);

// Get transfer data from drag+drop events
const dropData = dropEvents.pluck<DragEvent, DataTransfer>('dataTransfer')
	// Ignore drag+drop events originating from within the app
	.filter((dt) => dt.getData('application/vnd.skeoh.bookmarklet') === '');

// Get JS source from data copy+pasted or drag+dropped into the app
const sourceData = dropData
	.map((dt) => dt.getData('text/plain'))
	.map((text) => text.replace(/^javascript:/, ''))
	.map((ugly) => beautify(ugly));

export default class DataInputTarget extends React.Component<Props, void> {
	private dndSubscription: Subscription;
	private dataSubscription: Subscription;

	componentWillMount () {
		const { onData } = this.props;
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
