const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
const mysql = require('mysql')
dotenv.config();
const indexRouter = require('./routes/login');
const usersRouter = require('./routes/signup');

const app = express();

const db = require('./connection/connection')

// database connection
db.connection.connect((error) => {
  if (error) {
    console.log(error)
  } else (
    console.log('database connected...')
  )
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});







// server setup..

app.listen(process.env.PORT, () => {
  console.log('Server Started....')
  console.log(`running on ${process.env.PORT}......`)
})



module.exports = app;
