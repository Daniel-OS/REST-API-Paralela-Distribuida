const express = require('express');
const app = express();
const morgan = require('morgan')

//Ajustes
app.set('port', process.env.PORT || 3000); //El puerto
app.set('json spaces',2); //El formato en que se muestra con separacion 2

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//rutas
app.use('/api/v1/countries',require('./routes/countries'));
app.use('/api/v1/indicators',require('./routes/indicators'));

//Inicia el server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});