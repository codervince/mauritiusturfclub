import React from 'react';
import ReactDOM from 'react-dom';
import DataApi from 'DataApi';
import App from 'components/App';

const store = new DataApi(window.initialData);


ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
