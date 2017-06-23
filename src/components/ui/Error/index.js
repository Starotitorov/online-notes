import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

export default class Error extends React.Component {
    static propTypes = {
        autoclose: PropTypes.bool,
        interval: PropTypes.number,
        id: PropTypes.number,
        message: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired
    };

    static defaultProps = {
        autoclose: false
    };

    constructor(props) {
        super(props);

        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);

        if (this.props.autoclose) {
            setTimeout(
                () => this.handleAlertDismiss(),
                this.props.interval
            );
        }
    }

    handleAlertDismiss() {
        this.props.onClose(this.props.id);
    }

    render() {
        return (
            <Alert className="error" bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                <span>{this.props.message}</span>
            </Alert>
        );
    }
}
