var express = require('express');
var router = express.Router();

// Rota principal para renderizar a lista de usuários
router.get('/', (req, res) => {
  // Lista de 10 usuários fictícios
  const usuarios = [
    { id: 1, nome: 'Alice Silva', email: 'alice@example.com', descricao: 'Desenvolvedora front-end.' },
    { id: 2, nome: 'Bruno Costa', email: 'bruno@example.com', descricao: 'Engenheiro de software.' },
    { id: 3, nome: 'Carla Mendes', email: 'carla@example.com', descricao: 'Analista de dados.' },
    { id: 4, nome: 'Daniel Souza', email: 'daniel@example.com', descricao: 'Designer UX/UI.' },
    { id: 5, nome: 'Eduarda Lima', email: 'eduarda@example.com', descricao: 'Gerente de projetos.' },
    { id: 6, nome: 'Felipe Rocha', email: 'felipe@example.com', descricao: 'Administrador de sistemas.' },
    { id: 7, nome: 'Gabriela Dias', email: 'gabriela@example.com', descricao: 'Especialista em segurança da informação.' },
    { id: 8, nome: 'Henrique Almeida', email: 'henrique@example.com', descricao: 'Product Owner.' },
    { id: 9, nome: 'Isabela Nunes', email: 'isabela@example.com', descricao: 'Cientista de dados.' },
    { id: 10, nome: 'João Pedro', email: 'joao@example.com', descricao: 'Desenvolvedor back-end.' }
  ];

  // Renderiza o template 'usuarios' com os dados
  res.render('users', {
    titulo: 'Lista de Usuários',
    usuariosParaView: usuarios
  });
});

module.exports = router;
