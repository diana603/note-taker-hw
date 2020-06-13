// copy pasted code from daves class example// 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9080;  //const PORT = process.env.PORT || 3000; will need to change to this 
const path = require('path');
const root = { root: path.join(__dirname, "/public") };
//const htmlRoutes = require('./routes/htmlRoutes.js');
//const apiRoutes = require('./routes/apiRoutes');

// set up our middleware to handle POST data
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);
app.get('/', (req, res) => res.sendFile("index.html", root));


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

// need to make path to show develop folder// 