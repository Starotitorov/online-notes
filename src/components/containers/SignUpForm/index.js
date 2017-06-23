import SignUpForm from '../../ui/SignUpForm/index';
import { connect } from 'react-redux';
import { signUpUser } from '../../../actions';

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch) =>
    ({
        onSubmit(data) {
            dispatch(signUpUser(data));
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
