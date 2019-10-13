const express = require('express');
const mongodb = require('mongodb');

const { loggerMiddleware } = require('./middleware/logger.middleware');

const { professionRouter } = require('./router/profession.router');

const app = express();

// app.use( loggerMiddleware );


// api endpoints

app.use('/professions', professionRouter );

app.all('*', (req,res) => {
    
    res.json({
        message: "Hit the server"
    })

});



app.listen( 4200, () => {
    console.log("Listening to port 4200");
});