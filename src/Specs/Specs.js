import React from "react"
import MainForm from "../MainForm/MainForm"
import Option from "../Option/Option"
import './App.css';


function Specs(props) {
    return (
        Object.keys(props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = props.features[feature].map(item => {
              
              return (
               <Option item={item} feature={feature} selected={props.selected} updateFeature={props.updateFeature}/> 
              );
            });
      
            return (
              <main>
              <form className="main__form">
              <h2>Customize your laptop</h2>
            <Specs features={this.props.features} selected={this.state.selected} />
            <MainForm feature={feature} options={options} featureHash={featureHash}/>
              </form>
              </main>
              
            );
        })
    )
}

export default Specs