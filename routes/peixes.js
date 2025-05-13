var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista de peixes
router.get('/', (req, res) => {
  // Lista com diversos peixes
  const meusPeixes = [ 
    { id: 1, nome: 'Salmão', descricao: 'Peixe de água doce e salgada, muito popular em culinárias de todo o mundo.', imagem: '/images/salmao.jpg' },
    { id: 2, nome: 'Atum', descricao: 'Peixe de grande porte, encontrado em águas abertas do oceano.', imagem: '/images/atum.jpg' },
    { id: 3, nome: 'Tubarão', descricao: 'Peixe cartilaginoso conhecido por sua grande força e agilidade.', imagem: '/images/tubarao.jpg' },
    { id: 4, nome: 'Badejo', descricao: 'Peixe marinho muito apreciado na culinária brasileira.', imagem: '/images/badejo.jpg' },
    { id: 5, nome: 'Dourado', descricao: 'Peixe de água doce, encontrado em rios da América do Sul.', imagem: '/images/dourado.jpg' },
    { id: 6, nome: 'Mojarra', descricao: 'Peixe pequeno, comum em rios e lagos tropicais.', imagem: '/images/mojarra.jpg' },
    { id: 7, nome: 'Pargo', descricao: 'Peixe de águas salgadas, com carne firme e saborosa.', imagem: '/images/pargo.jpg' },
    { id: 8, nome: 'Peixe-boi', descricao: 'Mamífero marinho que se assemelha a um peixe, conhecido por sua grande tamanho e hábitos lentos.', imagem: '/images/peixe-boi.jpg' },
    { id: 9, nome: 'Garoupa', descricao: 'Peixe de grande porte, comum em águas tropicais e subtropicais.', imagem: '/images/garoupa.jpg' },
    { id: 10, nome: 'Sardinha', descricao: 'Peixe pequeno e oleoso, muito consumido em conserva ou fresco.', imagem: '/images/sardinha.jpg' },
    { id: 11, nome: 'Lingueirão', descricao: 'Molusco marinho com carne saborosa, frequentemente servido em pratos gourmet.', imagem: '/images/lingueirao.jpg' },
    { id: 12, nome: 'Robalo', descricao: 'Peixe de água salgada e doce, apreciado por sua carne delicada.', imagem: '/images/robalo.jpg' },
    { id: 13, nome: 'Tilápia', descricao: 'Peixe de água doce muito consumido no Brasil, popular em pratos fritos ou grelhados.', imagem: '/images/tilapia.jpg' },
    { id: 14, nome: 'Bacalhau', descricao: 'Peixe de águas geladas, tradicionalmente utilizado em pratos como o bacalhau à Brás.', imagem: '/images/bacalhau.jpg' },
    { id: 15, nome: 'Piranha', descricao: 'Peixe de água doce, conhecido por seu comportamento agressivo e dentes afiados.', imagem: '/images/piranha.jpg' },
    { id: 16, nome: 'Anchova', descricao: 'Peixe pequeno e salgado, usado principalmente em conserva.', imagem: '/images/anchova.jpg' },
    { id: 17, nome: 'Cavala', descricao: 'Peixe de águas temperadas, de carne saborosa e muito nutritiva.', imagem: '/images/cavala.jpg' },
    { id: 18, nome: 'Corvina', descricao: 'Peixe encontrado tanto em águas doces quanto salgadas, apreciado pela sua carne firme.', imagem: '/images/corvina.jpg' },
    { id: 19, nome: 'Truta', descricao: 'Peixe de água doce, popular entre pescadores e apreciadores de pratos sofisticados.', imagem: '/images/truta.jpg' },
    { id: 20, nome: 'Búfalo', descricao: 'Peixe de água doce encontrado em grandes rios da Ásia.', imagem: '/images/bufalo.jpg' },
    { id: 21, nome: 'Mahi-mahi', descricao: 'Peixe de águas tropicais, de carne firme e saborosa, muito consumido em pratos exóticos.', imagem: '/images/mahi-mahi.jpg' },
    { id: 22, nome: 'Sardinha-do-pacifico', descricao: 'Peixe pequeno do Pacífico, utilizado principalmente em conserva.', imagem: '/images/sardinha-do-pacifico.jpg' },
    { id: 23, nome: 'Pescada', descricao: 'Peixe de água salgada e doce, com carne branca e delicada.', imagem: '/images/pescada.jpg' },
    { id: 24, nome: 'Pargo-de-fogo', descricao: 'Espécie rara de pargo, encontrada em áreas mais profundas do oceano.', imagem: '/images/pargo-de-fogo.jpg' }
  ];
  
  // Renderiza o template 'lista' com os dados dos peixes
  res.render('peixes', {
    titulo: 'Peixes Marinhos e de Água Doce',
    itensParaView: meusPeixes
  });
});

module.exports = router;
