import React from 'react';
import PropTypes from 'prop-types'
import Error from '../Error'
import './index.scss';

export default class ErrorsList extends React.Component {
    static propTypes = {
        errors: PropTypes.array,
        onClearError: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.handleClearError = this.handleClearError.bind(this);
    }

    handleClearError(index) {
        this.props.onClearError(index);
    }

    render() {
        return (
            <div className="errors">
                {(this.props.errors.length) ?
                    this.props.errors.map((message, i) =>
                        <Error key={i} id={i} message={message} onClose={this.handleClearError} autoclose={true} interval={3000} />
                    ) : null
                }
            </div>
        );
    }
}
