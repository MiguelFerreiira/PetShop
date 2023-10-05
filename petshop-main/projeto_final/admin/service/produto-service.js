const listaProduto = () =>  {
    return fetch(`http://localhost:3000/product`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
    })
}

const criarProduto = (produto, preco, descricao) => { 
    return fetch(`http://localhost:3000/product`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            produto: produto,
            preco: preco,
            descricao: descricao
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um produto')
    })
}

const removeProduto = (id) => { 
    return fetch(`http://localhost:3000/product/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um produto')
        }
    })
}
 
const detalhaProduto = (id) => { 
    return fetch(`http://localhost:3000/product/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um produto')
    })
}

const atualizaProduto = (id, preco, descricao) => {
    return fetch(`http://localhost:3000/product/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            produto: produto, 
            preco: preco,
            descricao: descricao
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um produto')
    })
}

export const produtoService = { 
    listaProduto,
    criarProduto, 
    removeProduto,
    detalhaProduto,
    atualizaProduto
}
