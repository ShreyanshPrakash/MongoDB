const express = require('express');

const { loggerMiddleware } = require('./../middleware/logger.middleware');

const { getAllDoctors } = require('./../controllers/doctors.controller');

const professionRouter = express.Router();

function customMiddlewarePayload( payload ){
    console.log( payload );
    return function ( req, res, next ){
        res.locals.paylaod = this.paylaod;
        next();
    }

}

professionRouter.use( loggerMiddleware, customMiddlewarePayload( {name: "Shreyansh"} )  );

professionRouter.get( "/doctor/:id", async ( req,res ) => {

    let data = await getAllDoctors();
    res.json({
            message: `Hitting profession as doctor ${req.params.id}`
        })

})


module.exports = { professionRouter };