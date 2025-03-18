// Array para armazenar os nomes dos amigos
let nomes = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo"); // Seleciona o campo de input
    const nome = inputAmigo.value.trim(); // Pega o valor do input e remove espaços em branco

    // Verifica se o nome é válido e não está repetido
    if (nome && !nomes.includes(nome)) {
        nomes.push(nome); // Adiciona o nome ao array
        inputAmigo.value = ""; // Limpa o campo de input
        atualizarLista(); // Atualiza a lista na tela
    } else {
        alert("Por favor, insira um nome válido ou que ainda não foi adicionado.");
    }
}

// Função para atualizar a lista de nomes na tela
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos"); // Seleciona a lista
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    // Adiciona cada nome do array à lista na tela
    nomes.forEach((nome) => {
        const item = document.createElement("li"); // Cria um novo item da lista
        item.textContent = nome; // Define o texto do item
        listaAmigos.appendChild(item); // Adiciona o item à lista
    });

    // Atualiza o estado do botão de sorteio
    const botaoSortear = document.querySelector(".button-draw");
    botaoSortear.disabled = nomes.length < 2; // Desabilita o botão se houver menos de 2 nomes
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos dois nomes para realizar o sorteio.");
        return;
    }

    const embaralhado = [...nomes].sort(() => Math.random() - 0.5); // Embaralha a lista de nomes
    const resultado = document.getElementById("resultado"); // Seleciona a área de resultado
    resultado.innerHTML = "<h2>Resultado do Sorteio:</h2>"; // Limpa e prepara a área de resultado

    // Atribuição circular dos amigos secretos
    for (let i = 0; i < embaralhado.length; i++) {
        const amigoAtual = embaralhado[i];
        const amigoSecreto = embaralhado[(i + 1) % embaralhado.length]; // Próximo na lista (circular)
        const paragrafo = document.createElement("p"); // Cria um novo parágrafo
        paragrafo.textContent = `${amigoAtual} tirou ${amigoSecreto}`; // Define o texto do parágrafo
        resultado.appendChild(paragrafo); // Adiciona o parágrafo à área de resultado
    }
    
    // Lança os confetes ao sortear
    lançarConfetti();
}

// Função para lançar confetes 🎊
function lançarConfetti() {
    confetti({
        particleCount: 500,
        spread: 160,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#ff0000', '#00ff00', '#0000ff'] // Cores personalizadas
    });
}