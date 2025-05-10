const express = require('express');
require('express-async-errors');

const cors = require('cors');
const morgan = require ("morgan");
const helmet = require('helmet');
const authMiddleware = require('./middlewares/authMiddlewares');
const errorMiddleware = require('./middlewares/errorMiddlewares');

const settingsRouter = require('./routers/settingsRouter');
const symbolsRouter = require('./routers/symbolsRouter');
const exchangeRouter = require('./routers/exchangeRouter');

const router = express.Router();

const authController = require('./controllers/authController');

const app = express();

app.use(morgan("dev"));

app.use(cors({origin: process.env.CORS_ORIGIN}));

app.use(helmet());

app.use(express.json());

app.post('/login', authController.doLogin);

router.use('/settings', authMiddleware, settingsRouter);

router.use('/symbols', authMiddleware, symbolsRouter);

app.use('/exchange', authMiddleware, exchangeRouter);

app.post('/logout', authController.doLogout);

app.use(router);

app.use(errorMiddleware);

module.exports = app;