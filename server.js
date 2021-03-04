const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 4000;

connectDB();

app.get('/', (req, res) => res.send('API running'));

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