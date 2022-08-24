const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(expressLayouts);
app.set('layout','./layouts/defaultLayout');
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index', { title: "Home" });
});

app.get('/about', (req,res) => {
    res.render('about', { layout: './layouts/aboutLayout', title: "About" });
});

app.listen(3000, (err) => {
    if(err){
        console.log("Something went Wrong");
    }
    else{
        console.log("Server is listening at port 3000");
    }
});