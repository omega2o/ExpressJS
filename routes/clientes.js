const express = require('express');
const router = express.Router();

// Rota para a página inicial
router.get('/', (req, res) => {
  res.render('index', { title: 'Clientes' });
});

// Rota para a página de clientes VIP
router.get('/vip', (req, res) => {
  res.render('index', { title: 'Clientes VIP' });
});

module.exports = router;
