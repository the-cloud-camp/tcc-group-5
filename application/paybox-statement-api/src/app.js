require('dotenv').config();
const express = require('express');
const cors = require('cors');
const notFoundMiddleware = require('./middlewares/not-found');
const errorMiddleware = require('./middlewares/error');
const mongodb = require('./mongodb/mondodb.connect');
const authenticate = require('./middlewares/authenticate');
const statementRoute = require('./router/statement-route');

mongodb.connect();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/statement', authenticate, statementRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || '5001';
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
