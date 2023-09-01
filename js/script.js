function operacao(value) {
  document.getElementById('resultado').value += value;
}

function limpa_campo() {
  document.getElementById('resultado').value = '';
}

function calcula_resultado() {
  const resultado = document.getElementById('resultado').value;
  
  const operadorDuplicadoRegex = /[-+*/%]{2}/g;
  if (operadorDuplicadoRegex.test(resultado)) {
    alert('Operação inválida! Verifique os operadores digitados.');
    return;
  }
  
  const divisaoporZeroRegex = /\/0/g;
  if (divisaoporZeroRegex.test(resultado)) {
    alert('Operação inválida! Não é possível dividir por zero.');
    return;
  }
  
  try {
    const calculaResultado = eval(resultado);
    document.getElementById('resultado').value = calculaResultado;
  } catch (error) {
    alert('Ocorreu um erro ao calcular a expressão.');
  }
}
