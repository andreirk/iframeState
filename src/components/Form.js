import React, {Component} from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1em;
  color: #0275d8;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #0275d8;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;


const Button = styled.button`

  background: ${props => props.primary ? '#0275d8' : 'white'};
  color: ${props => props.primary ? 'white' : '#0275d8'};

  font-size: .9em;
  margin: .5em;
  padding: 0.25em 1em;
  border: 1px solid #0275d8;
  border-radius: 3px;
`;

class Form extends Component {

    state = {
        inputValue: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.inputValue)
    }

    componentDidMount(){
        this.setState((prevState, curProps) => {
            return {
                inputValue: curProps.content
            }
        })
    }

    componentWillReceiveProps(nextProps){
        if(this.props.content !== nextProps.content){
            this.setState(() => ({ inputValue: nextProps.content }))
        }
    }


    onInputChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ inputValue: value }));
    };

    render() {
        const content = this.state.inputValue;
        return (
            <div> <Title>Form</Title>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text"  onChange={this.onInputChange} value={content} />
                    <Button primary  type="submit">Send</Button>
                </form>
            </div>
        );
    }
}

Form.propTypes = {};
Form.defaultProps = {};

export default Form;


