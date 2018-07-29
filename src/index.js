import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "./Context";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

const AppProvider = props => (
  <Provider>
    <App />
  </Provider>
);

ReactDOM.render(<AppProvider />, document.getElementById('root'));
registerServiceWorker();
