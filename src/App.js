import React, { Component } from 'react';
import MainSummary from "./MainSummary/MainSummary";
import MainForm from "./MainForm/MainForm";
import { FEATURES } from './index';
import './App.css';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    const { features } = this.props;
    const { selected } = this.state;
    //console.log(FEATURES)

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <MainForm
            features={FEATURES}
            selected={selected}
            updateFeature={(feature, newValue) =>
              this.updateFeature(feature, newValue)
            }
          />
          <MainSummary selected={selected} />
        </main>
      </div>
    );
  }
}

export default App;