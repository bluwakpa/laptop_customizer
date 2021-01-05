import React from 'react'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const total = Object.keys(this.state.selected).reduce(
    (acc, curr) => acc + this.state.selected[curr].cost,
    0
);

export default SummaryTotal