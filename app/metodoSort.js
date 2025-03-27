let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPreco.addEventListener('click', ordenarLivrosPreco);

function ordenarLivrosPreco(){
    let livrosOrdernados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosTela(livrosOrdernados);
};