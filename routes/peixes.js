var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista de peixes
router.get('/', (req, res) => {
  // Lista com diversos peixes
  const meusPeixes = [
    { id: 1, nome: 'Salmão', descricao: 'Peixe de água doce e salgada, muito popular em culinárias de todo o mundo.' },
    { id: 2, nome: 'Atum', descricao: 'Peixe de grande porte, encontrado em águas abertas do oceano.' },
    { id: 3, nome: 'Tubarão', descricao: 'Peixe cartilaginoso conhecido por sua grande força e agilidade.' },
    { id: 4, nome: 'Badejo', descricao: 'Peixe marinho muito apreciado na culinária brasileira.' },
    { id: 5, nome: 'Dourado', descricao: 'Peixe de água doce, encontrado em rios da América do Sul.' },
    { id: 6, nome: 'Mojarra', descricao: 'Peixe pequeno, comum em rios e lagos tropicais.' },
    { id: 7, nome: 'Pargo', descricao: 'Peixe de águas salgadas, com carne firme e saborosa.' },
    { id: 8, nome: 'Peixe-boi', descricao: 'Mamífero marinho que se assemelha a um peixe, conhecido por sua grande tamanho e hábitos lentos.' },
    { id: 9, nome: 'Garoupa', descricao: 'Peixe de grande porte, comum em águas tropicais e subtropicais.' },
    { id: 10, nome: 'Sardinha', descricao: 'Peixe pequeno e oleoso, muito consumido em conserva ou fresco.' },
    { id: 11, nome: 'Lingueirão', descricao: 'Molusco marinho com carne saborosa, frequentemente servido em pratos gourmet.' },
    { id: 12, nome: 'Robalo', descricao: 'Peixe de água salgada e doce, apreciado por sua carne delicada.' },
    { id: 13, nome: 'Tilápia', descricao: 'Peixe de água doce muito consumido no Brasil, popular em pratos fritos ou grelhados.' },
    { id: 14, nome: 'Bacalhau', descricao: 'Peixe de águas geladas, tradicionalmente utilizado em pratos como o bacalhau à Brás.' },
    { id: 15, nome: 'Piranha', descricao: 'Peixe de água doce, conhecido por seu comportamento agressivo e dentes afiados.' },
    { id: 16, nome: 'Anchova', descricao: 'Peixe pequeno e salgado, usado principalmente em conserva.' },
    { id: 17, nome: 'Cavala', descricao: 'Peixe de águas temperadas, de carne saborosa e muito nutritiva.' },
    { id: 18, nome: 'Corvina', descricao: 'Peixe encontrado tanto em águas doces quanto salgadas, apreciado pela sua carne firme.' },
    { id: 19, nome: 'Truta', descricao: 'Peixe de água doce, popular entre pescadores e apreciadores de pratos sofisticados.' },
    { id: 20, nome: 'Búfalo', descricao: 'Peixe de água doce encontrado em grandes rios da Ásia.' },
    { id: 21, nome: 'Mahi-mahi', descricao: 'Peixe de águas tropicais, de carne firme e saborosa, muito consumido em pratos exóticos.' },
    { id: 22, nome: 'Sardinha-do-pacifico', descricao: 'Peixe pequeno do Pacífico, utilizado principalmente em conserva.' },
    { id: 23, nome: 'Pescada', descricao: 'Peixe de água salgada e doce, com carne branca e delicada.' },
    { id: 24, nome: 'Pargo-de-fogo', descricao: 'Espécie rara de pargo, encontrada em áreas mais profundas do oceano.' }
  ];

  // Renderiza o template 'lista' com os dados dos peixes
  res.render('peixes', {
    titulo: 'Peixes Marinhos e de Água Doce',
    itensParaView: meusPeixes
  });
});

module.exports = router;
