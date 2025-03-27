let livros = [];
const endpointDaAPI = 'https://raw.githubusercontent.com/MarcusViniciusGodoy/livrosJson/refs/heads/main/livros.json';
getBuscaLivrosDaAPI();

async function getBuscaLivrosDaAPI() {
    const resposta = await fetch(endpointDaAPI);
    livros = await resposta.json();
    let livrosDesconto = aplicarDesconto(livros);
    exibirLivrosTela(livrosDesconto);
};