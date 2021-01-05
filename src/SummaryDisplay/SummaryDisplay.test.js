import React from 'react';
import ReactDOM from 'react-dom';
import MainSummary from './SummaryDisplay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainSummary />, div);
  ReactDOM.unmountComponentAtNode(div);
});