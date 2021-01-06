import React from "react"
import SummaryDisplay from '../SummaryDisplay/SummaryDisplay'
import Option from '../Option/Option'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

function Summary(props) {
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

export default Summary 