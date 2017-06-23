import SignInForm from '../../ui/SignInForm/index';
import { connect } from 'react-redux';
import { signInUser } from '../../../actions';

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch) =>
    ({
        onSubmit(data) {
            dispatch(signInUser(data));
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
