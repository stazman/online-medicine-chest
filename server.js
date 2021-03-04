const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const connectDB = require('./config/db')
const cors = require('cors');
const PORT = process.env.PORT || 4000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({limit: '50mb'}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client'));
app.use(express.static(path.join(__dirname, './client')));

app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));


// mongoose.connect('mongodb://127.0.0.1:27017/daily-fitness-advisor-mern', {useNewURLParser: true });

// const connection = mongoose.connection;

// connection.once('open', function(){
//   console.log('MongoDB db connection established successfully');
// })

//TODO:
// const advisorRouter = require('./routes/AdvisorRoutes');
// const journalRouter = require('./routes/JournalRoutes');
// const resourceRouter = require('./routes/ResourceRoutes');

//TODO:
// app.use('/advisors', advisorRouter);
// app.use('/journals', journalRouter);
// app.use('/resources', resourceRouter);

app.listen(PORT, function(){
  console.log('Server is running on Port ' + PORT);
})


//FOR MONGODB ATLAS INSTEAD OF LOCAL CONFIGURATION:

// require('dotenv').config();

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@resources-wadmo.mongodb.net/test`);

// mongo mongodb://$[hostlist]/$[database]?authSource=$[authSource] --username $[username]