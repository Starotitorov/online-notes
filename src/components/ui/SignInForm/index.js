import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class SignInForm extends React.Component {
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

        this.props.onSubmit({
            email,
            password
        });
    }

    render() {
        return (
            <form className="form-signin" onSubmit={this.handleSubmit}>
                <h2 className="form-signin-heading">Sign in</h2>
                <label htmlFor="emailInput" className="sr-only">Email address</label>
                <input type="email" id="emailInput" ref={(input) => this.emailInput = input} className="form-control" placeholder="Email address" required/>
                <label htmlFor="passwordInput" className="sr-only">Password</label>
                <input type="password" id="passwordInput" ref={(input) => this.passwordInput = input} className="form-control" placeholder="Password" required />
                <button className="btn btn-primary btn-block" type="submit">Sign in</button>
            </form>
        );
    }
}
