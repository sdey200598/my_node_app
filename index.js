const express = require('express')
const cors = require('cors');

const app = express()

// using cors :-
const corsOptions = {
    exposedHeaders: 'Authorization',
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'),
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'),
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// home route :-
app.get('/', (req, res) => {
    res.send({ data: 'This is the Home Page' });
});

// defining port :-
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listing on port ${port}..`));
