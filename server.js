// copy pasted code from daves class example// 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const root = { root: path.join(__dirname, "/public") };

//const apiRoutes = require('./routes/apiRoutes');
// set up our middleware to handle POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(root.root));

//app.use('/api', apiRoutes);
//app.use(htmlRoutes);
//htmlRoutes(app);
app.get('/', (req, res) => res.sendFile("index.html", root));
app.get('/notes', (req, res) => res.sendFile("./notes.html", root));



app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

// need to make path to show develop folder// 