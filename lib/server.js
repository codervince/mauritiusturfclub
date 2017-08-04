import express from 'express';
import config from './config.js';
import serverRender from '../renderers/server';
import data from './out.json';


const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req,res) =>{
  const initialContent = await serverRender();
  // console.log(initialContent);
  res.render('index', {...initialContent});
});
//data endpoint

app.get('/data', (req,res) =>{
  res.send(data);
});



app.listen(config.port, function listenHander(){
  console.info(`Running on ${config.port} ......`);
});
