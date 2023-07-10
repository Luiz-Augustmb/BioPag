function showValue(valor) {
    var display = document.getElementById("display");
    display.textContent = "R$" + valor.toFixed(2).replace(".", ",");
}

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var valor = urlParams.get('valor');
  
    var display = document.getElementById("display");
    display.textContent = "R$" + parseFloat(valor).toFixed(2);
  }
  
  function calculateParcela(parcelas) {
    var urlParams = new URLSearchParams(window.location.search);
    var valor = urlParams.get('valor');
    var valorParcela = valor / parcelas;
  
    var display = window.parent.document.getElementById("display");
    var valorDisplay = "R$" + valorParcela.toFixed(2).replace(".", ",");
    var parcelaDisplay = parcelas + "x";
    
    // Monta o HTML para exibição no display
    var html = `<span>${valorDisplay}</span> <span class="parcela-option">${parcelaDisplay}</span>`;
    display.innerHTML = html;
  }
  
  

  