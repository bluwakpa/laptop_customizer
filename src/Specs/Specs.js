import React from "react";
import slugify from "slugify";
import Parts from "../Parts/Parts";

class Specs extends React.Component {
  render() {
    const {
      features,
      feature,
      selected,
      idx,
      updateFeature
    } = this.props;
    
    const featureHash = feature + "-" + idx;
    const options = features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));

      return (
        <Parts
          key={itemHash}
          item={item}
          feature={feature}
          selected={selected}
          updateFeature={updateFeature}
        />
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default Specs;