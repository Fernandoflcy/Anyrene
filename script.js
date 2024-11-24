document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const welcomeScreen = document.getElementById("welcome-screen");
  const surpriseContent = document.getElementById("surprise-content");
  const countdownTimer = document.getElementById("countdown-timer");
  const secretMessage = document.getElementById("secret-message");
  const typedMessage = document.getElementById("typed-message");
  const photoGallery = document.getElementById("photo-gallery");
  const downloadBtn = document.getElementById("download-btn");
  const responseForm = document.getElementById("response-form");
  const responseMessage = document.getElementById("response-message");
  const sendResponse = document.getElementById("send-response");
  const backgroundMusic = document.getElementById("background-music");
  const toggleTheme = document.getElementById("toggle-theme");

  // Modo Noturno
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Iniciar contagem regressiva e música
  startBtn.addEventListener("click", () => {
    welcomeScreen.style.display = "none";
    surpriseContent.style.display = "block";

    backgroundMusic.play().catch((error) => {
      console.error("Erro ao iniciar a música:", error.message);
    });

    let countdown = 10;
    const timer = setInterval(() => {
      countdown--;
      countdownTimer.textContent = `Aguarde a surpresa em... ${countdown} segundos`;

      if (countdown === 0) {
        clearInterval(timer);
        countdownTimer.style.display = "none";

        // Revelar mensagem secreta
        revealMessage();
      }
    }, 1000);
  });
function launchConfetti() {
  const confettiSettings = { target: 'confetti-canvas' };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  setTimeout(() => confetti.clear(), 5000); // Limpa os confetes após 5 segundos
}

// Adiciona o canvas para os confetes
const canvas = document.createElement('canvas');
canvas.id = 'confetti-canvas';
canvas.className = 'canvas-container';
document.body.appendChild(canvas);

// Ativa os confetes quando a mensagem é gerada
generateBtn.addEventListener("click", () => {
  if (nameInput.value.trim()) {
    launchConfetti();
  }
});
document.getElementById('celebration-btn').addEventListener('click', activateCelebration);

function activateCelebration() {
  // Música animada
  const audio = new Audio('https://example.com/celebration-music.mp3'); // Substituir pela URL da música
  audio.play();

  // Confetes animados
  const canvas = document.getElementById('celebration-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 300 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 4 + 1,
    d: Math.random() * 5,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10,
    tiltAngle: Math.random() * Math.PI * 2
  }));

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
  }

  function updateConfetti() {
    confetti.forEach(p => {
      p.tiltAngle += 0.1;
      p.y += p.d;
      p.x += Math.sin(p.tiltAngle) * 2;
      if (p.y > canvas.height) {
        p.y = -p.r;
        p.x = Math.random() * canvas.width;
      }
    });
  }

  function animateConfetti() {
    drawConfetti();
    updateConfetti();
    requestAnimationFrame(animateConfetti);
  }

  animateConfetti();

  // Mensagem especial
  setTimeout(() => {
    alert('🎉 Parabéns! Você ativou o Modo de Celebração! 🎉');
    audio.pause();
  }, 10000); // Tempo da celebração (10 segundos), 
}
  // Revelar mensagem secreta
  function revealMessage() {
    secretMessage.style.display = "block";

    const message = "Você é incrível! Desde o momento que entrou na minha vida, tudo mudou para melhor. A cada dia, você me surpreende mais com sua doçura, sua sabedoria, e o jeito único de enxergar o mundo. Irene, hoje, o mundo celebra o nascimento de uma pessoa tão especial, encantadora e cheia de luz, que torna qualquer lugar mais bonito só pela sua presença. 🎉.      🌹Desde que te conheci, lá em 2019, minha vida ganhou uma cor diferente, uma alegria que só você sabe trazer. Nunca imaginei que o simples ato de cruzarmos os caminhos poderia transformar tanto o meu coração. O que sinto por você é algo que palavras mal conseguem expressar, mas vou tentar: é um amor que aquece a alma, que faz com que eu sorria mesmo nos dias mais difíceis, só de pensar em você. Cada gesto seu, cada palavra, cada olhar tem um poder que me toca profundamente. 🥰.        ✨Você é a combinação perfeita de força, beleza, sensatez e doçura. Não há um dia que passe em que eu não me sinta inspirado por você, pela maneira como lida com a vida, com os desafios, com as pessoas. Você me ensina a ser uma pessoa melhor, me motiva a acreditar em mim mesmo e no melhor que a vida tem a oferecer. O tempo pode passar, mas o carinho, o respeito e o sentimento que temos um pelo outro só ficam mais fortes, mais profundos e mais verdadeiros. 💖                        Hoje é o seu dia, e quero que saiba o quanto você é amada, admirada e essencial para todos ao seu redor. Neste dia tão lindo, eu te desejo tudo o que há de mais maravilhoso no mundo: saúde, felicidade, realizações, e uma vida cheia de motivos para sorrir. 😍 Que você continue a brilhar intensamente, espalhando essa energia única que só você tem, e que cada sonho seu se transforme em realidade, pois você merece tudo o que há de melhor. 🌟.                        Feliz aniversário, minha pessoa favorita! 🥳🎂 Que este novo ciclo seja recheado de momentos incríveis, de aprendizados, de crescimento e de momentos que ficarão marcados para sempre no seu coração. Que a cada novo amanhecer, você se sinta mais forte, mais realizada e mais feliz. E, acima de tudo, que você saiba, no fundo do seu coração, que você é e sempre será muito amada, tanto por mim quanto por todos que têm a sorte de te conhecer. ❤️.                    Com todo o carinho do meu coração, com gratidão por cada momento ao seu lado, e com a certeza de que nossa jornada juntos está apenas começando, eu te amo mais do que palavras podem expressar. Que a vida te surpreenda de formas maravilhosas e que você continue a brilhar sempre, Irene.     Com amor eterno,Fernando Flcy 💕"

    
    
    
    
    let index = 0;

    const typingEffect = setInterval(() => {
      typedMessage.textContent += message[index];
      index++;

      if (index === message.length) {
        clearInterval(typingEffect);

        // Mostrar galeria e botão de download
        setTimeout(() => {
          photoGallery.style.display = "block";
          downloadBtn.style.display = "block";
          responseForm.style.display = "block";

          // Iniciar confetes
          startConfetti();
        }, 2000);
      }
    }, 100);
  }
function startCountdown() {
  let countdownDiv = document.getElementById("countdown");
  let timeLeft = 5; // Segundos para contar

  const timer = setInterval(() => {
    countdownDiv.textContent = `A surpresa será revelada em: ${timeLeft} segundos`;
    timeLeft -= 1;

    if (timeLeft < 0) {
      clearInterval(timer);
      countdownDiv.textContent = ""; // Limpa o texto do contador
      output.style.display = "block"; // Mostra a mensagem gerada
      launchConfetti(); // Lança os confetes
    }
  }, 1000);
}

// Modifica o botão para iniciar o timer antes de exibir a mensagem
generateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    output.style.display = "none"; // Esconde a mensagem temporariamente
    startCountdown();
  } else {
    output.textContent = "Por favor, insira o nome da pessoa especial.";
  }
});
  // Função de confetes
  function startConfetti() {
    const confettiSettings = { target: "confetti-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }

  // Enviar mensagem de resposta
  sendResponse.addEventListener("click", () => {
    alert(`Sua mensagem foi enviada: "${responseMessage.value}"`);
    responseMessage.value = ""; // Limpar campo de texto
  });
});
