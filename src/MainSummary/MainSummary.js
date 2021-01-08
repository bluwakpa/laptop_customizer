import React from "react"
import Total from "../Total/Total"
import Option from '../Option/Option'
import '../App.css';

class MainSummary extends React.Component {
    render() {
      const { selected } = this.props;
  
      const summary = Object.keys(selected).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
  
        return (
          <Option
            key={featureHash}
            feature={feature}
            selected={selected}
            idx={idx}
          />
        );
      });
  
      return (
        <section className="main__summary">
          <h2> Your cart</h2>
          {summary}
          <Total selected={selected} />
        </section>
      );
    }
  }

export default MainSummary