import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

/*
  example todo websites
  https://www.wunderlist.com/#/lists/303838634
  https://en.todoist.com/app?v=867#agenda%2Foverdue%2C%20today
*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
