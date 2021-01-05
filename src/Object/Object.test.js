import React from 'react';
import ReactDOM from 'react-dom';
import Object from './Object';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Object />, div);
  ReactDOM.unmountComponentAtNode(div);
});