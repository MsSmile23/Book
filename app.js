require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);


const app = express();
const PORT = process.env.PORT ?? 3000;
const indexRouter = require('./sourse/routes/index.router');
const userRouter = require('./sourse/routes/user.router');

app.locals = 'title LOCALS';

const sessionConfig = {
  name: 'Examen',
  store: new FileStore(), 
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(expressSession(sessionConfig));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.get('/*', (req, res) => {
  res.send('404 Page not found');
});

app.listen(PORT, () => {
  console.log(`Server starting on PORT ${PORT}`);
});
