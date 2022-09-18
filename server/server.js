const client = require('./connection');
const express = require('express')
const cors = require('cors');

//Inicialización de la app
const app = express();

//Cors se utiliza para poder conectar los dos servidores que se tienen: (client y server)
app.use(cors());

//Puerto en el que estará escuchando el API
app.listen(3300, () => {
    console.log("Server is now listening at port 3300");
})

client.connect();

//Requests a la base de datos
app.get('/edificios', (req, res) => {
    
    const q = 'SELECT id, ST_AsSVG(geom) as aceras_svg, descipcion, "Techado", tipo FROM tec.aceras';
    
    client.query(q, (err, result) => {
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

})

app.get('/zonas_verdes', (req, res) => {

    const q = "SELECT id, ST_AsSVG(geom) as zonas_verdes_svg FROM tec.zonas_verdes";

    client.query(q, (err, result) => {
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

})

app.get('/vialidad', (req, res) => {

    const q = "SELECT id, ST_AsSVG(geom) as vialidad_svg, tipo FROM tec.vialidad";

    client.query(q, (err, result) => {
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

})

app.get('/edificios', (req, res) => {

    const q = "SELECT id, ST_AsSVG(geom) as edificios_svg, nombre, niveles FROM tec.edificios";

    client.query(q, (err, result) => {
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

})

