// ===== SCRIPT DO PROJETO FUTUROVERDE =====
// Funcionalidades: Simulador de salvamento de árvores + Acessibilidade

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {

    // ===== 1. SIMULADOR INTERATIVO =====
    // Pega todos os botões do simulador
    const botoesAcao = document.querySelectorAll('.botao-acao');
    const mensagemResultado = document.getElementById('mensagem-resultado');
    const arvoresSalvasSpan = document.getElementById('arvores-salvas');

    // Para cada botão, adiciona um evento de clique
    botoesAcao.forEach(botao => {
        botao.addEventListener('click', function() {
            // Pega o número de árvores salvas (atributo data-arvores)
            const arvores = this.getAttribute('data-arvores');
            const nomeAcao = this.textContent;
            
            // Atualiza a mensagem na tela
            mensagemResultado.textContent = `Você escolheu: ${nomeAcao}`;
            arvoresSalvasSpan.innerHTML = `🌳🌳🌳 Você salvou aproximadamente ${arvores} árvores por ano! 🌳🌳🌳`;
        });
    });

    // ===== 2. BOTÃO DE ACESSIBILIDADE =====
    const botaoAcessibilidade = document.getElementById('botaoAcessibilidade');
    const menuAcessibilidade = document.getElementById('menuAcessibilidade');
    
    // Abrir/fechar menu de acessibilidade
    botaoAcessibilidade.addEventListener('click', function() {
        menuAcessibilidade.classList.toggle('mostrar');
    });
    
    // ===== 3. FUNÇÕES DE ACESSIBILIDADE =====
    const body = document.body;
    
    // Aumentar fonte (até 28px)
    const aumentarFonte = document.getElementById('aumentarFonte');
    aumentarFonte.addEventListener('click', function() {
        let tamanhoAtual = window.getComputedStyle(body).fontSize;
        let novoTamanho = parseFloat(tamanhoAtual) + 2;
        if (novoTamanho <= 28) {
            body.style.fontSize = novoTamanho + 'px';
        } else {
            alert('A fonte já está no tamanho máximo recomendado.');
        }
    });
    
    // Diminuir fonte (até 12px)
    const diminuirFonte = document.getElementById('diminuirFonte');
    diminuirFonte.addEventListener('click', function() {
        let tamanhoAtual = window.getComputedStyle(body).fontSize;
        let novoTamanho = parseFloat(tamanhoAtual) - 2;
        if (novoTamanho >= 12) {
            body.style.fontSize = novoTamanho + 'px';
        } else {
            alert('A fonte já está no tamanho mínimo recomendado.');
        }
    });
    
    // Alto contraste
    const altoContraste = document.getElementById('altoContraste');
    let contrasteAtivo = false;
    
    altoContraste.addEventListener('click', function() {
        if (!contrasteAtivo) {
            body.classList.add('alto-contraste');
            contrasteAtivo = true;
            altoContraste.textContent = '🌓 Desativar contraste';
        } else {
            body.classList.remove('alto-contraste');
            contrasteAtivo = false;
            altoContraste.textContent = '🌓 Alto contraste';
        }
    });
    
    // Fecha o menu se clicar fora dele (opcional)
    document.addEventListener('click', function(event) {
        if (!menuAcessibilidade.contains(event.target) && !botaoAcessibilidade.contains(event.target)) {
            menuAcessibilidade.classList.remove('mostrar');
        }
    });
    
});
