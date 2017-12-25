import React, {Component} from 'react';
import Form from "./Form";
import IFrame from 'react-frame-component';
import StyleSheet from 'styled-components/lib/models/StyleSheet';
import ReactDOM from 'react-dom';

class IFrameFormComponent extends Component {

    componentDidMount() {
        ReactDOM.findDOMNode(this.frame).contentDocument.head.innerHTML = StyleSheet.instance.toHTML();
    }

    render() {
        return (
            <IFrame  ref={el =>  this.frame = el } >
                <Form handleSubmit={this.props.handleSubmit} content={this.props.content} />
            </IFrame>
        );
    }
}

IFrameFormComponent.propTypes = {};
IFrameFormComponent.defaultProps = {};

export default IFrameFormComponent;

