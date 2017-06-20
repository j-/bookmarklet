import { connect } from 'react-redux';
import DataInputTarget from '../components/DataInputTarget';
import { setSource } from '../store/actions';

const mapStateToProps = null;

const mapDispatchToProps = {
	onData: setSource,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DataInputTarget);
