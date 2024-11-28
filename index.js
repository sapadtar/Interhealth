const speakButton = document.getElementById("speakButton");
const speechBubble = document.getElementById("speechBubble");

// Array de falas
const messages = [
  'Você quer saber a origem do meu nome? :3',
  'Meu nome é Penny, e aqui é um ambiente seguro!',
  'Aqui é um ambiente seguro! :3',
  'Rawr XD',
  'Comer uma besteira que você gosta pode te deixar feliz, mas sempre com moderação!',
  'Eu não sou um Trojan.',  
  'Cyberbullying eh paia slk.',
  'Qual foi menó me clica ae nao nmrl.',
  'Não sofra sozinho. Procure ajuda de quem você confia.',
  'Hihi~ :3',
  'Você me clicou! :3',

];

speakButton.addEventListener("click", () => {
  // Exibe o balão de fala
  speechBubble.style.display = "block";

  // Escolhe uma mensagem aleatória
  const randomIndex = Math.floor(Math.random() * messages.length);
  speechBubble.textContent = messages[randomIndex];

  // Opcional: esconder o balão após 2 segundos
  setTimeout(() => {
    speechBubble.style.display = "none";
  }, 250000);
});

