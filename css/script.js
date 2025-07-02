document.addEventListener('DOMContentLoaded', function() {
    const mainHeader = document.querySelector('.main-header'); // Seleciona o seu cabeçalho
    const scrollThreshold = 50; // Quantos pixels de rolagem para ativar a mudança

    // Função para verificar a posição de rolagem e aplicar/remover a classe
    function checkScroll() {
        // Se a página rolou mais do que scrollThreshold pixels
        if (window.scrollY > scrollThreshold) {
            mainHeader.classList.add('scrolled'); // Adiciona a classe 'scrolled'
        } else {
            mainHeader.classList.remove('scrolled'); // Remove a classe 'scrolled'
        }
    }

    // Adiciona o 'listener' para o evento de rolagem
    window.addEventListener('scroll', checkScroll);

    // Executa a função uma vez ao carregar a página (caso o usuário já esteja rolado)
    checkScroll();
});