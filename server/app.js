// 
var createError = require('http-errors');
// 引入express
var express = require('express');
var path = require('path');
// 声明使用解析cookie数据的中间件
var cookieParser = require('cookie-parser');
// ？？？？
var logger = require('morgan');
// 引入路由组件
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 创建一个express实例
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// 用json解析输入的请求
app.use(express.json());
// 用urlencoded解析
app.use(express.urlencoded({ extended: false }));
// 解析cookie
app.use(cookieParser());
// 暴露静态资源
app.use(express.static(path.join(__dirname, 'public')));

// 声明使用路由器中间件
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
