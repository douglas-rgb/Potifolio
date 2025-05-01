// Função para rolar suavemente até o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostra o botão quando a página é rolada para baixo
window.addEventListener('scroll', function () {
  const scrollTopButton = document.querySelector('.btn-scroll-top');
  if (window.scrollY > 100) {
    scrollTopButton.style.display = 'flex';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

// Seção de contato

document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const servico = document.getElementById('servico').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `Olá, me chamo ${nome}. Estou interessado no serviço de: ${servico}. Aqui está o que preciso: ${mensagem}`;
  const url = `https://wa.me/5511912824454?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
});

