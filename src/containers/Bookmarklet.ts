import { connect } from 'react-redux';
import Bookmarklet from '../components/Bookmarklet';
import { ReducerState, getSource, getTitle } from '../store';

const mapStateToProps = (state: ReducerState) => ({
	source: getSource(state),
	title: getTitle(state),
});

const mapDispatchToProps = () => ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Bookmarklet);
