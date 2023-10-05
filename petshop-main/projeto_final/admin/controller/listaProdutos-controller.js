import { produtoService } from '../service/produto-service.js'

const criaNovaLinha = (produto, preco, descricao, id) =>  { 
  const linhaNovoProduto = document.createElement('tr')
  const conteudo = `
      <td class="td" data-td>${produto}</td>
                  <td>${preco}</td>
                  <td>${descricao}</td>
                  <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                      </ul>
                  </td> 
                  `
  linhaNovoProduto.innerHTML = conteudo
  linhaNovoProduto.dataset.id = id
  return linhaNovoProduto
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento)=> {
    let ehBotaoDeDeleta = evento.target.className === 'botao-simples botao-simples--excluir'
    if(ehBotaoDeDeleta){
        try {
            const linhaProduto = evento.target.closest('[data-id]')
            let id = linhaProduto.dataset.id
            await produtoService.removeProduto(id)
            linhaProduto.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href="../telas/erro.html"
        }
    }
})

const render = async () =>  {
    try {
        const listaProduto = await produtoService.listaProduto()
        listaProduto.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.produto,elemento.preco,elemento.descricao, elemento.id))
    })
    }
    catch(erro){
        console.log(erro)
        window.location.href="../telas/erro.html"
    }
}

render()