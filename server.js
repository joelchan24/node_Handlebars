const express = require('express')
const app = express()
 // hbs
 const hbs = require('hbs');

require('./hbs/helpers.js')
 const port=process.env.PORT||8080;
//crear publuc midleware se ejecuta siempre sin importar el url
app.use(express.static(__dirname+'/public'));
//hbs 
hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine', 'hbs');
//helpers from hbs


//request of get 
app.get('/',  (req, res)=> {
    let output={
        name:"joel",
        age:10
    }

  res.render('home',{name:"Joel"});
})
app.get('/about',  (req, res)=> {
  let output={
      name:"joel",
      age:10
  }

res.render('about',{name:"Joel"});
})
 
app.listen(port,()=>{
  console.log(`Esta corriendo en ${port}`)
})