// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Campo de entrada
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

    // Validação: verifica se o campo está vazio
    if (nomeAmigo === '') {
        alert('Campo vazio :( Por favor, insira um nome.'); // Exibe um alerta
        return; // Interrompe a execução da função
    }

    // Adiciona o nome ao array
    listaAmigos.push(nomeAmigo);

    // Atualiza a lista de nomes na página
    atualizarListaAmigos();

    // Limpa o campo de entrada
    inputAmigo.value = '';
}

// Função para atualizar a lista de nomes na página
function atualizarListaAmigos() {
    const listaAmigosElemento = document.getElementById('listaAmigos'); // Elemento <ul> da lista
    listaAmigosElemento.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome da lista ao <ul>
    listaAmigos.forEach((amigo, index) => {
        const itemLista = document.createElement('li'); // Cria um <li>
        itemLista.textContent = amigo; // Define o texto do <li>
        listaAmigosElemento.appendChild(itemLista); // Adiciona o <li> à <ul>
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há nomes na lista
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.'); // Exibe um alerta
        return; // Interrompe a execução da função
    }

    // Sorteia um índice aleatório do array
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado]; // Obtém o nome sorteado

    // Exibe o resultado na página
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>Amigo secreto: ${amigoSorteado}</li>`; // Exibe o nome sorteado
}