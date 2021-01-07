import React from "react"
import Feature from "../Feature/Feature"
import Option from "../Option/Option"


function FeatureDisplay(props) {
    return (
        Object.keys(props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = props.features[feature].map(item => {
              
              return (
               <Option item={item} feature={feature} selected={props.selected} updateFeature={props.updateFeature}/> 
              );
            });
      
            return (
              <>
                <form className="main__form">
                  <h2>Customize your laptop</h2>
                  <Feature feature={feature} options={options} featureHash={featureHash}/>
                </form>
              </>
            );
        })
    )
}

export default FeatureDisplay