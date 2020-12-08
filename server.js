const express = require('express');
// const router = require('./server/routes/routes.js')
// const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = 4000;


require('dotenv').config();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));

app.listen(port, function(){
  console.log('Server is running on Port ' + port);
})

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '../client'));
// app.use(express.static(path.join(__dirname, '../client')));

// app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));


mongoose.connect('mongodb://127.0.0.1:27017/daily-fitness-advisor-mern', {useNewURLParser: true });

const connection = mongoose.connection;

connection.once('open', function(){
  console.log('MongoDB db connection established successfully');
})

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@resources-wadmo.mongodb.net/test`);

// mongo mongodb://$[hostlist]/$[database]?authSource=$[authSource] --username $[username]

// app.use('/', router);

// module.exports=app;

// (node:50116) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
// (Use `node --trace-deprecation ...` to show where the warning was created)
// (node:50116) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
// (node:50116) UnhandledPromiseRejectionWarning: MongoNetworkError: failed to connect to server [resources-shard-00-02-wadmo.mongodb.net:27017] on first connect [MongoNetworkError: connection 5 to resources-shard-00-02-wadmo.mongodb.net:27017 closed
