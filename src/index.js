import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FEATURES from './Parts/Parts';


ReactDOM.render(<App features={FEATURES}/>, document.getElementById('root'));