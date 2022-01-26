const sequence = {
    _id: 1,
    get id() {return this._id++}
}

console.log(sequence._id)

const produtosAll = {}

function salvarProduto(produto){
    if(!produto.id){
        produto.id = sequence.id
    }

    produtosAll[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtosAll[id] || {}
}

function getAllProdutos(){
    return Object.values(produtosAll)
}

function deleteProduto(id){
    delete produtosAll[id]
    return produtosAll[id]
}

module.exports = {
    salvarProduto, getProduto, getAllProdutos, deleteProduto
}