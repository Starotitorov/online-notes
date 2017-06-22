import SignInForm from '../ui/SignInForm';
import { connect } from 'react-redux';
import { signInUser } from '../../actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
    ({
        onSubmit(data) {
            dispatch(signInUser(data));
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
