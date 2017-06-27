import { connect } from 'react-redux';
import ShareBookmarkletButton from '../components/ShareBookmarkletButton';
import { ReducerState, getTitle, getSource } from '../store';

const mapStateToProps = (state: ReducerState) => ({
	title: getTitle(state),
	source: getSource(state),
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShareBookmarkletButton);
