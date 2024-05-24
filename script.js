function validarCamposObrigatorios(oProduto, aQuantidade, oPrecoUnitario, aDataTransacao){
  // RN.01 - Validação Campos Obrigatórios
  return oProduto && aQuantidade != null && oPrecoUnitario != null && aDataTransacao;
}

function validarQuantidadeProdutos(aQuantidade){
  // RN.02 - Validação Quantidade de Produtos
  return aQuantidade > 0;
}

function validarPrecoUnitario(oPrecoUnitario){
  //RN.03 - Validação Preço Unitário
  return oPrecoUnitario > 0;
}

function registrarDataTransacao(){
  //RN.04 - registro da data da transação
 return new Date().toLocaleString() ;
}

function registrarVenda(produto, quantidade, precoUnitario){
    let dataTransacao = registrarDataTransacao(); 

  let validaCamposObrigatorios = validarCamposObrigatorios(produto, quantidade, precoUnitario, dataTransacao);
  let validaQuantidadeProdutos = validarQuantidadeProdutos(quantidade)
  let validaPrecoUnitario = validarPrecoUnitario(precoUnitario);

  if(validaCamposObrigatorios){
    if(validaQuantidadeProdutos){
      if(validaPrecoUnitario){
      alert("Transação realizada com sucesso! Produto: " + produto + " ,Quantidade: " + quantidade + " Preço Unitário:R$ " + precoUnitario + " Data da Transação: " + dataTransacao);
    } else {
      alert("Problemas na Validação de Quantidade de Produtos!")   
    }
  } else {
      alert("Problemas na validação de campos obrigatórios!");
  }
  }
}

registrarVenda("arroz", 5 , 10);
registrarVenda("feijão", 20, 25);
registrarVenda("farofa", 10, 3, 40);

