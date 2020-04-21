const express = require('express');
const path  = require('path');
const app = express();
const employeeList = require('./routes/employeeList')
const todoList =require('./routes/todoList')

const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); //serve all our static files form here
app.use('/css', express.static(path.join(__dirname , '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname , '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname , '/node_modules/jquery/dist/')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/',employeeList)
app.use(todoList)


app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}...`)
})