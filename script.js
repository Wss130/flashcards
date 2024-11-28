let score = 0; // Contador de flashcards visualizados

// Adicionando os flashcards dinamicamente
const flashcardsData = [
    { question: "O que é HTML?", answer: "HTML é uma linguagem de marcação usada para estruturar páginas na web." },
    { question: "O que é CSS?", answer: "CSS é uma linguagem de estilo usada para definir a aparência das páginas web." },
    { question: "O que é JavaScript?", answer: "JavaScript é uma linguagem de programação usada para criar conteúdo interativo nas páginas web." },
    { question: "O que é Python?", answer: "Python é uma linguagem de programação usada para desenvolvimento web, análise de dados, IA e mais." },
    { question: "O que é um algoritmo?", answer: "Um algoritmo é uma sequência de passos para resolver um problema específico." },
    { question: "O que é Git?", answer: "Git é um sistema de controle de versões para gerenciar código-fonte." },
    { question: "O que é Node.js?", answer: "Node.js é um ambiente de execução JavaScript no lado do servidor." },
    { question: "O que é SQL?", answer: "SQL é uma linguagem usada para gerenciar e manipular bancos de dados relacionais." },
    { question: "O que é um navegador?", answer: "Um navegador é um software usado para acessar websites na internet." },
    { question: "O que é uma API?", answer: "API (Interface de Programação de Aplicações) permite que diferentes sistemas se comuniquem entre si." },
    { question: "O que é Cloud Computing?", answer: "Cloud Computing é o uso de servidores remotos para armazenar e processar dados." },
    { question: "O que é uma rede?", answer: "Uma rede é um conjunto de dispositivos interconectados que compartilham recursos e dados." },
    { question: "O que é uma variável?", answer: "Uma variável é uma estrutura de dados usada para armazenar informações que podem mudar durante a execução do programa." },
    { question: "O que é OOP?", answer: "OOP (Programação Orientada a Objetos) é um paradigma de programação que usa objetos para representar dados e comportamentos." },
    { question: "O que é uma função?", answer: "Uma função é um bloco de código que realiza uma tarefa específica e pode ser reutilizada." },
    { question: "O que é um sistema operacional?", answer: "Um sistema operacional é um software que gerencia o hardware e os recursos de um computador." },
    { question: "O que é um framework?", answer: "Um framework é uma estrutura que fornece suporte para o desenvolvimento de aplicações." },
    { question: "O que é HTTP?", answer: "HTTP (Hypertext Transfer Protocol) é o protocolo usado para a comunicação entre navegadores e servidores web." },
    { question: "O que é Front-End?", answer: "Front-End é a parte de um site ou aplicação com a qual o usuário interage diretamente." },
    { question: "O que é Back-End?", answer: "Back-End é a parte do sistema que lida com a lógica de negócios e a manipulação de dados no servidor." }
];

// Referência para o contêiner de flashcards
const flashcardsContainer = document.querySelector('.flashcard-container');
const scoreElement = document.getElementById('score');

// Criar flashcards dinamicamente
flashcardsData.forEach((data, index) => {
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');
    flashcard.setAttribute('data-index', index);

    flashcard.innerHTML = `
        <div class="front">
            <p>${data.question}</p>
        </div>
        <div class="back">
            <p>${data.answer}</p>
        </div>
    `;

    flashcardsContainer.appendChild(flashcard);

    // Adiciona o evento mouseenter e mouseleave para virar o flashcard
    flashcard.addEventListener('mouseenter', () => {
        flipCard(flashcard);
    });

    flashcard.addEventListener('mouseleave', () => {
        flipCard(flashcard);
    });
});

// Função para virar o flashcard
function flipCard(card) {
    card.classList.toggle('flip');
}

// Adicionar o contador de flashcards visualizados
function updateScore() {
    score++;
    scoreElement.textContent = score;
}

