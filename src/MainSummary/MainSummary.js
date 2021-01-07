import React from "react"
import Total from "../Total/Total"
import Option from '../Option/Option'
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

function MainSummary(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
        return (
            <Total selectedOption={selectedOption} feature={feature} featureHash={featureHash}/>
        );
    });
    return(
        <>
            {summary}
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(props.total)}
                </div>
            </div>
        </>
    )
}

export default MainSummary