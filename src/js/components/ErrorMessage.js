var ErrorMessage = React.createClass({
    getDefaultProps() {
        return {
            message: ''
        };
    },
    render() {
        return (
            <div className="error-message">
                <figure className="error-message__picture">
                    <i className="owf owf-762"></i>
                </figure>

                <h3 className="error-message__title">
                    { this.props.message }
                </h3>
            </div>
        );
    }
});

window.ErrorMessage = ErrorMessage;