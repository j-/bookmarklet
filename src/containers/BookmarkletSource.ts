import { connect } from 'react-redux';
import BookmarkletSource from '../components/BookmarkletSource';
import { ReducerState, getSource } from '../store';
import { setSource } from '../store/actions';

const mapStateToProps = (state: ReducerState) => ({
	value: getSource(state),
});

const mapDispatchToProps = {
	onChange: setSource,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookmarkletSource);
