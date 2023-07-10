// Botão "CORRIGIR"
function removeLastDigit() {
    var display = document.getElementById("answer");
    var currentValue = display.value;
  
    // Verificar se o valor atual é igual a "R$0,00"
    if (currentValue === "R$0,00") {
      return;
    }
  
    // Remover apenas o último dígito digitado
    var newValue = currentValue.slice(0, -1);
  
    // Verificar se o novo valor é vazio e, em caso afirmativo, definir como "R$0,00"
    if (newValue === "R$") {
      newValue = "R$0,00";
    }
  
    // Atualizar o display com o novo valor
    display.value = newValue;
  }
  
  // Botão "APAGAR"
  function clearValue() {
    var display = document.getElementById("answer");
  
    // Limpar o valor exibido no display
    display.value = "R$0,00";
  }
  
  // DISPLAY  
  window.onload = function() {
    var display = document.getElementById("answer");
    display.value = "R$0,00";
  }
  
  function appendNumber(number) {
    var display = document.getElementById("answer");
  
    // Remover o símbolo 'R$' e a vírgula do valor atual
    var currentValue = display.value.replace("R$", "").replace(",", "");
  
    // Adicionar o número digitado ao valor atual
    currentValue = currentValue + number;
  
    // Formatar o valor com as casas decimais
    var formattedValue = formatCurrency(currentValue);
  
    // Atualizar o display com o valor formatado
    display.value = "R$" + formattedValue;
  
    // Armazenar o valor digitado na variável global
    valorDigitado = parseFloat(currentValue.replace(",", "."));
  }
  
  function formatCurrency(value) {
    // Verificar se o valor é vazio ou zero
    if (value === "" || value === "0") {
      return "0,00";
    }
  
    // Remover zeros à esquerda
    value = value.replace(/^0+/, "");
  
    // Verificar se o valor possui parte decimal
    if (value.length <= 2) {
      value = value.padStart(3, "0");
    } else {
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, "");
    }
  
    // Separar a parte inteira da parte decimal
    var integerPart = value.slice(0, -2);
    var decimalPart = value.slice(-2);
  
    // Combinar a parte decimal e inteira com a vírgula
    var formattedValue = integerPart + "," + decimalPart;
  
    return formattedValue;
  }
  
  // Redirecionar para a segunda página e passar o valor digitado como parâmetro
  function goToSecondPage() {
    var valorDigitado = document.getElementById("answer").value.replace("R$", "").replace(",", ".");
    var url = "forma_Pagamento.html?valor=" + valorDigitado;
    window.location.href = url;
  }
  
  function showValue(valor) {
    var display = document.getElementById("display");
    display.textContent = "R$" + valor.toFixed(2).replace(".", ",");
  }
  
  function calculateParcela(parcelas) {
    var urlParams = new URLSearchParams(window.location.search);
    var valor = parseFloat(urlParams.get('valor'));
    var valorParcela = (valor / parcelas).toFixed(2).replace(".", ",");
  
    var display = document.getElementById("display");
    display.textContent = "R$" + valorParcela + " por parcela (" + parcelas + "x)";
  
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "";
  }
  
  