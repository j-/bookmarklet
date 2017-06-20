import * as React from 'react';
import { connect } from 'react-redux';
import { ReducerState, getTitle } from '../store';
import { setTitle } from '../store/actions';

interface StateProps {
	value: string;
}

interface DispatchProps {
	onChange: Function;
}

const mapStateToProps = (state: ReducerState) => ({
	value: getTitle(state),
});

const mapDispatchToProps = {
	onChange: setTitle,
};

const Input = ({ value, onChange }: StateProps & DispatchProps) => (
	<input
		id="bookmarklet-title"
		className="pt-input pt-fill"
		type="text"
		placeholder="Leave blank for no title"
		style={{ width: '100%' }}
		value={value}
		onChange={(e) => onChange(e.currentTarget.value)}
	/>
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Input);
