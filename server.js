const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 4000;

connectDB();

//Middleware allowing use of data in req.body

app.use(express.json({
  extended: false
}))

app.get('/', (req, res) => res.send('API running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/advisors', require('./routes/api/advisors'));
app.use('/api/journal_entries', require('./routes/api/journal_entries'));
app.use('/api/resources', require('./routes/api/resources'));

app.listen(PORT, function(){
  console.log('Server is running on Port ' + PORT);
})