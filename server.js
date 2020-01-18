const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware instead of using Body Parser, 3rd party software
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Profile Manager API.' })
);

// Defining Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/authenticate', require('./routes/authenticate'));
app.use('/api/profiles', require('./routes/profiles'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
