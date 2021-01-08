import React from "react"
import Option from "../Option/Option"
import './App.css';

function MainForm(props) {
  return (
    Object.keys(this.props.state.selected).map((feature, idx) => { 
      const featureHash = feature + '-' + idx; 
      const Options = this.props.state.selected[feature];
    
        return (
         <Option item={item} feature={feature} selected={props.selected} updateFeature={props.updateFeature}/> 
        );
      }
      )
  )
          return (
            <fieldset className="feature" key={props.featureHash}>
              <legend className="feature__name"> 
                <h3>{props.feature}</h3>
              </legend>
                {props.options}
            </fieldset>
          )
}

export default MainForm