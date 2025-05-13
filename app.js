var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clientesRouter = require('./routes/clientes');
var listaRouter = require('./routes/lista');
var peixesRouter = require('./routes/peixes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // Assegurando que o Handlebars seja utilizado como view engine

// Middleware de logging, parsing de JSON e cookies
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Servindo arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Definição das rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clientes', clientesRouter);
app.use('/lista', listaRouter);
app.use('/peixes', peixesRouter);

// Middleware para tratar erro 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Middleware para tratamento de erros
app.use(function(err, req, res, next) {
  // Definir variáveis locais para mensagens de erro, visíveis apenas em ambiente de desenvolvimento
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderiza a página de erro com o status apropriado
  res.status(err.status || 500);
  res.render('error'); // Renderiza o template de erro, normalmente localizado em views/error.hbs
});

module.exports = app;

