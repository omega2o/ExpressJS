var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
  // Lista com todas as letras gregas
  const meusItens = [
    { id: 1, nome: 'Item Alfa', descricao: 'Primeira letra do alfabeto grego.' },
    { id: 2, nome: 'Item Beta', descricao: 'Segunda letra do alfabeto grego.' },
    { id: 3, nome: 'Item Gama', descricao: 'Terceira letra do alfabeto grego.' },
    { id: 4, nome: 'Item Delta', descricao: 'Quarta letra do alfabeto grego.' },
    { id: 5, nome: 'Item Épsilon', descricao: 'Quinta letra do alfabeto grego.' },
    { id: 6, nome: 'Item Zeta', descricao: 'Sexta letra do alfabeto grego.' },
    { id: 7, nome: 'Item Eta', descricao: 'Sétima letra do alfabeto grego.' },
    { id: 8, nome: 'Item Teta', descricao: 'Oitava letra do alfabeto grego.' },
    { id: 9, nome: 'Item Iota', descricao: 'Nona letra do alfabeto grego.' },
    { id: 10, nome: 'Item Kapa', descricao: 'Décima letra do alfabeto grego.' },
    { id: 11, nome: 'Item Lambda', descricao: 'Décima primeira letra do alfabeto grego.' },
    { id: 12, nome: 'Item Mi', descricao: 'Décima segunda letra do alfabeto grego.' },
    { id: 13, nome: 'Item Ni', descricao: 'Décima terceira letra do alfabeto grego.' },
    { id: 14, nome: 'Item Xi', descricao: 'Décima quarta letra do alfabeto grego.' },
    { id: 15, nome: 'Item Ômicron', descricao: 'Décima quinta letra do alfabeto grego.' },
    { id: 16, nome: 'Item Pi', descricao: 'Décima sexta letra do alfabeto grego.' },
    { id: 17, nome: 'Item Rô', descricao: 'Décima sétima letra do alfabeto grego.' },
    { id: 18, nome: 'Item Sigma', descricao: 'Décima oitava letra do alfabeto grego.' },
    { id: 19, nome: 'Item Tau', descricao: 'Décima nona letra do alfabeto grego.' },
    { id: 20, nome: 'Item Upsilon', descricao: 'Vigésima letra do alfabeto grego.' },
    { id: 21, nome: 'Item Fi', descricao: 'Vigésima primeira letra do alfabeto grego.' },
    { id: 22, nome: 'Item Chi', descricao: 'Vigésima segunda letra do alfabeto grego.' },
    { id: 23, nome: 'Item Psi', descricao: 'Vigésima terceira letra do alfabeto grego.' },
    { id: 24, nome: 'Item Ômega', descricao: 'Última letra do alfabeto grego.' }
  ];

  // Renderiza o template 'lista' com os dados
  res.render('lista', {
    titulo: 'Alfabeto Grego',
    itensParaView: meusItens
  });
});

module.exports = router;
