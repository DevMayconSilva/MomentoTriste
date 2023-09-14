document.addEventListener("DOMContentLoaded", function () {
  const funButton = document.getElementById("funButton");
  const phrases = [
    "As dificuldades são temporárias, mas nosso amor é duradouro. Vamos superar isso lado a lado.",
    "Você é a luz da minha vida e estou aqui para apoiar você sempre que precisar.",
    "Lembre-se de que cada nuvem escura passa e o sol sempre volta a brilhar.",
    "Seu sorriso é a minha fonte de alegria. Vamos superar isso juntos!",
    "Você é tão incrível e forte. Não deixe que os momentos difíceis te derrube",
    "Não importa o quão difícil seja, lembre-se de que estou aqui para enxugar suas lágrimas e compartilhar suas risadas.",
    "Sua felicidade é importante para mim, e estou aqui para fazer você sorrir.",
    "Você tem uma força dentro de si que pode mover montanhas. Acredite em si mesma!",
    "O mundo é mais brilhante com você nele. Vamos encontrar a alegria juntos novamente.",
    "Todos os dias, meu sentimento cresce e você se torna ainda mais importante na minha vida.",
    "Te abraço forte para seu cheiro grudar em mim e te sentir perto quando for embora.",
    "Você desperta em mim uma vontade de ser feliz e te fazer feliz.",
  ];

  funButton.addEventListener("click", () => {
    // Adicionar classe de animação quando o botão é clicado
    funButton.classList.add("button-clicked");

    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];

    // Criar um elemento de parágrafo para exibir a frase
    const messageElement = document.createElement("p");
    messageElement.textContent = randomPhrase;

    // Obter a div de mensagens
    const messageContainer = document.querySelector(".message-container");

    // Limpar mensagens antigas
    while (messageContainer.firstChild) {
      messageContainer.removeChild(messageContainer.firstChild);
    }

    // Adicionar a mensagem à página
    messageContainer.appendChild(messageElement);

    // Remover a classe de animação após um breve atraso (por exemplo, 1 segundo)
    setTimeout(() => {
      funButton.classList.remove("button-clicked");
    }, 1000);
  });
});
