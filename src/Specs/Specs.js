import React from "react"
import MainForm from "../MainForm/MainForm"
import './App.css';

function Specs(props) {     
  return (
    <main>
      <form className="main__form">
        <h2>Customize your laptop</h2>
          <Specs features={this.props.features} selected={this.state.selected} />
          <MainForm feature={feature} options={options} featureHash={featureHash}/>
      </form>
    </main>
  );
}

export default Specs