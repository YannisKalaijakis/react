import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Products from './Products.js';


//  ReactDOM.render(
//   <Products />,
//   document.getElementById('root')
// );
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
