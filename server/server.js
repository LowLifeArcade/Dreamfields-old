import express from 'express';
import cors from 'cors';
import {readdirSync} from 'fs';
const morgan = require('morgan');
require('dotenv').config();

// create express app
const app = express();

// apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  express.json(console.log('Middleware activate'));
  next();
});

// routes
readdirSync('./routes').map((r) =>
  app.use('/api', require(`./routes/${r}`))
);

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`SERVER is running on port: ${port}`));
