import React from 'react';
import ReactDOM from 'react-dom';
import SummaryTotal from '../Summary/Summary';
import SummaryOption from './Option';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SummaryOption />, div);
  ReactDOM.unmountComponentAtNode(div);
});