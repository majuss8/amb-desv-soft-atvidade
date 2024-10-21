function processarPedido(idProduto, quantidade = 1){
    const produto = buscarprodutoPorId(idProduto);
    const existeProduto = verificarSeProdutoExiste(produto);

    if(!existeProduto){
        return 'Produto não encontrado!';
    }

    const valorTotal = c
}