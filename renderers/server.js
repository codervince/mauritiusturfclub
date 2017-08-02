import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import DataApi from 'DataApi';
import App from 'components/App';
import config from 'config.js';

const serverRender = async () => {
  //again get data via axios
  const resp  = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(resp.data);

  const initialData = {
    runners: api.getRunners()
  };


  return ReactDOMServer.renderToString(
    <App initialData={initialData}/>
  );
};

export default serverRender;
