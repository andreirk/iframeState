import React, {Component} from 'react';
import Form from "./Form";

class SimpleFormComponent extends Component {

    render() {
        return (
            <div>
                <Form handleSubmit={this.props.handleSubmit}  content={this.props.content} />
            </div>
        );
    }
}

SimpleFormComponent.propTypes = {};
SimpleFormComponent.defaultProps = {};

export default SimpleFormComponent;

