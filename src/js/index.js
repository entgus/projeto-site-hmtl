// Seleciona todos os botões e todos os personagens da página
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

// Exibe os botões no console (apenas para verificação durante o desenvolvimento)
console.log(botoes);

// Adiciona um ouvinte de evento de clique para cada botão
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Remove a classe 'selecionado' do botão atualmente ativo
        const botaoAtivo = document.querySelector(".botao.selecionado");
        botaoAtivo.classList.remove("selecionado");

        // Adiciona a classe 'selecionado' ao botão clicado
        botao.classList.add("selecionado");

        // Remove a classe 'selecionado' do personagem atualmente visível
        const personagemAtivo = document.querySelector(".personagem.selecionado");
        personagemAtivo.classList.remove("selecionado");

        // Adiciona a classe 'selecionado' ao personagem correspondente ao botão clicado
        personagens[indice].classList.add("selecionado");
    });
});


