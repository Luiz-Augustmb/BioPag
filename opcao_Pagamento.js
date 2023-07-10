function saveOption(option) {
    // Salvar a opção selecionada no localStorage
    localStorage.setItem('formaPagamento', option);
  }

  // CODIGO PARA RECUPERAR 
  // Recuperar a opção selecionada do localStorage
  var formaPagamento = localStorage.getItem('formaPagamento');

  // Exibir a opção na página
  document.getElementById("forma-pagamento").textContent = formaPagamento;