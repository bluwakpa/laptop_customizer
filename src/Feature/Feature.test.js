import React from 'react';
import ReactDOM from 'react-dom';
import MainForm from './Feature';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});