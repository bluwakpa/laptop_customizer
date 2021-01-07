import React from "react"
import MainSummary from '../MainSummary/MainSummary'
import Option from '../Option/Option'
import '../App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

function Total(props) {
    return(
        <div className="summary__option" key={props.featureHash}>
          <div className="summary__option__label">{props.feature} </div>
          <div className="summary__option__value">{props.selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(props.selectedOption.cost)}
          </div>
        </div>
    )
}

export default Total