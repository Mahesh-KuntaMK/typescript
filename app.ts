import express from 'express';

import todorouter from './router/todorouter';

import bodyParser from 'body-parser';





const app=express();
 
app.use(bodyParser.json());


app.use(todorouter);

app.listen(3000);