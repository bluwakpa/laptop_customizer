import React from "react"
import Option from "../Option/Option"
import './App.css';

function MainForm(props) {
    return(
        <fieldset className="feature" key={props.featureHash}>
          <legend className="feature__name">
            <h3>{props.feature}</h3>
          </legend>
          {props.options}
        </fieldset>
    )
}

export default MainForm