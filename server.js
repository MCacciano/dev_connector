const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect db
connectDB();

// init middlewar
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('api running'));

// define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) =>
  console.log(`Server is listening on port: ${PORT}`)
);
