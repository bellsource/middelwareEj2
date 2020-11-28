const express = require("express");
const server = express();

function loguearRuta(req,res,next){
    console.log("Esta accediendo a la ruta: " +req.path);
    next();//para que continue la ejecución
}

//middelware para una ruta especifica

//Creo rutas
server.get("/ruta1",  (req,res) => {
    res.send("Accedio a la ruta 1")
});

server.get("/ruta2", loguearRuta, (req,res) =>{
    res.send("Accedio a la ruta 2");
});


server.listen(3000, () => {
    console.log("servidor iniciado...");
})


