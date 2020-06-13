// install your packages which is inclueded 'path', 'router is part of express 'express' (router from express)

// get/notes route 

// get '*' route 
// sendFile() - directory, filename you want displayed 

//export router 

//const express = require("express");
//const app = express();
function htmlRoutes(app) {
    app.get('/notes', (req, res) => res.sendFile("./public/notes.html"));

}
module.exports = htmlRoutes;

