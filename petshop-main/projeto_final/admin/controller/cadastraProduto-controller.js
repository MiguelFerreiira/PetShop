import { produtoService } from '../service/produto-service.js'

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const produto = evento.target.querySelector('[data-produto]').value
    const preco = evento.target.querySelector('[data-preco]').value
    const descricao = evento.target.querySelector('[data-descricao]').value

    await produtoService.criarProduto(produto, preco, descricao)
    window.location.href = '../telas/cadastro_concluido-produto.html'
  }
  catch (erro) {
    console.log(erro)
    window.location.href = "../telas/erro.html"
  }
})