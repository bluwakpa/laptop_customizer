import React from 'react';
import ReactDOM from 'react-dom';
import FeatureItem from './FeatureDisplay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeatureItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});