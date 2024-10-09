// Função para mostrar detalhes ao clicar em 'Ver Mais'
function mostrarDetalhes(id) {
    var detalhes = document.getElementById(id);
    
    // Alterna a visibilidade da section de detalhes
    if (detalhes.classList.contains('active')) {
        detalhes.classList.remove('active');
    } else {
        // Oculta outros detalhes se houver mais signos
        var todasAsSections = document.querySelectorAll('.signo-detalhes');
        todasAsSections.forEach(function(section) {
            section.classList.remove('active');
        });
        
        // Mostra os detalhes do signo clicado
        detalhes.classList.add('active');

        // Rola suavemente até a section de detalhes
        detalhes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Código para rolagem suave ao clicar nos links 'Sobre' e 'Signos'
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links que têm a classe 'scroll-link'
    const scrollLinks = document.querySelectorAll('.scroll-link');

    // Adiciona um evento de clique para cada link
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            // Seleciona o alvo do link (com base no href do link)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Verifica se o elemento existe
            if (targetElement) {
                // Faz a rolagem suave até o elemento
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajusta 80px para dar espaço ao topo (ajustar conforme necessário)
                    behavior: 'smooth' // Comportamento suave de rolagem
                });
            }
        });
    });
});





