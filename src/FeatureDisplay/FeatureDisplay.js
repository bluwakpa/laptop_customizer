import React from "react"
import Feature from "../Feature/Feature"
import Option from "../Option/Option"


function FeatureDisplay(props) {
    return (
        Object.keys(props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = props.features[feature].map(item => {
              
              return (
               <Option item={item} feature={feature} selected={props.selected}/> 
              );
            });
      
            return (
              <Feature feature={feature} options={options} featureHash={featureHash}/>
            );
        })
    )
}

export default FeatureDisplay