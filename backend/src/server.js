const express = require('express')
const cors = require('cors')
const app=express();
const routesArticles = ('../routes/routesArticles');

app.use(express.json);

app.use(cors());


app.listen(3000, ()=>{
    console.log('servidor ligado na porta: 3000');
});