import { produtoService } from '../service/produto-service.js'


(async () => { 
  const pegaURL = new URL(window.location)

  const id = pegaURL.searchParams.get('id')
  
  const inputProduto = document.querySelector('[data-produto]')
  const inputPreco = document.querySelector('[data-preco]')
  const inputDescricao = document.querySelector('[data-descricao]')
  try { 
    const dados = await produtoService.detalhaProduto(id)
    inputProduto.value = dados.produto
    inputPreco.value = dados.preco
    inputDescricao.value = dados.descricao
  }
  catch(erro){
    console.log(erro)
    window.location.href="../telas/erro.html"
  }

  const formulario = document.querySelector('[data-form]')
  
  formulario.addEventListener('submit', async (evento)=> { 
    evento.preventDefault()
    try {
      await produtoService.atualizaProduto(id, inputProduto.value, inputPreco.value, inputDescricao.value)
      window.location.href = "../telas/edicao_concluida.html"
    }
    catch(erro){
      console.log(erro)
      window.location.href="../telas/erro.html"
    }
  })
})()
