const botoes = document.querySelectorAll(".botao");
console.log(botoes);
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{
        const botaoselecionado = document.querySelector(".botao.selecionado");
        botaoselecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");
      
       const personagemselecionado = document.querySelector(".personagem.selecionado");
       personagemselecionado.classList.remove("selecionado");

       personagens[indice].classList.add("selecionado");
        
    });
});


