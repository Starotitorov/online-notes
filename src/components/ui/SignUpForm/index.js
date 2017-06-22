import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class SignUpForm extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const passwordConfirmation = this.passwordConfirmationInput.value;

        this.props.onSubmit({
            email,
            password,
            passwordConfirmation
        });
    }

    render() {
        return (
            <form className="form-signup" onSubmit={this.handleSubmit}>
                <h2 className="form-signup-heading">Create an account</h2>
                <label htmlFor="emailInput" className="sr-only">Email address</label>
                <input type="email" id="emailInput" ref={(input) => this.emailInput = input} className="form-control form-control_position_top" placeholder="Email address" required/>
                <label htmlFor="passwordInput" className="sr-only">Password</label>
                <input type="password" id="passwordInput" ref={(input) => this.passwordInput = input} className="form-control form-control_position_middle" placeholder="Password" required />
                <label htmlFor="passwordConfirmationInput" className="sr-only">Password</label>
                <input type="password" id="passwordConfirmationInput" ref={(input) => this.passwordConfirmationInput = input} className="form-control form-control_position_bottom" placeholder="Password confirmation" required />
                <button className="btn btn-primary btn-block" type="submit">Create an account</button>
            </form>
        );
    }
}
