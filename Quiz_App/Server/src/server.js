import  express  from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import {data} from './data.js';

import sequelize, { Sequelize } from './database/database.js';


const app = express()

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

const port = process.env.PORT  || 8080;


app.use('/api', router)



app.get('/', (req, res) =>{
  try{
    res.json("Get request")
  } catch (error){
    res.json(error)
  }
});

app.listen(port, ()=>{
      console.log(`O servidor está rodando! http://localhost:${port}`);
    });







