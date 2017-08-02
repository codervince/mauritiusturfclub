import express from 'express';
import config from './config.js';
import serverRender from './serverRender';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req,res) =>{
  const initialContent = serverRender();
  console.log(initialContent);
  res.render('index', {initialContent:initialContent});
});


app.listen(config.port, function listenHander(){
  console.info(`Running on ${config.port} ......`);
});
