var express = require('express');
var router = express.Router();

/* Rota principal para usuários. */
router.get('/', function(req, res, next) {
  res.send('Respondendo com um recurso.');
});

/* Rota personalizada para Joédio. */
router.get('/joedio', function(req, res, next) {
  res.send('Olá, Joédio!');
});

module.exports = router;
