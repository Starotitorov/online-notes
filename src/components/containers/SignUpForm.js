import SignUpForm from '../ui/SignUpForm';
import { connect } from 'react-redux';
import { signUpUser } from '../../actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
    ({
        onSubmit(data) {
            dispatch(signUpUser(data));
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
