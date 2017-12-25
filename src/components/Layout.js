import React from 'react';
import SimpleFormComponent from "./SimpleFormComponent";
import IFrameFormComponent from "./IFrameFormComponent";
import {connect} from "react-redux";
import {formSubmit, inputContentSelector} from "../redux/ducks/app";

const Layout = (props) => (
  <div className="container">
      <IFrameFormComponent handleSubmit={props.formSubmit} content={props.inputContent}/>
    <div className="row">
        <SimpleFormComponent handleSubmit={props.formSubmit} content={props.inputContent} />
    </div>

  </div>
);

export default connect(
    (state) => ({
        inputContent: inputContentSelector(state),
    }), { formSubmit }
) (Layout);
