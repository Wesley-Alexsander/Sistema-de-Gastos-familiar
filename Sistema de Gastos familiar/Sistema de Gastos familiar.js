/*

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/

let saldoFamilia = {
  receitas: [3000, 2500, 1500, 700],
  despesas: [2500.27, 980.78, 799, 1700.34]
}

function somar(array) {
  let total = 0

  for (let valor of array) {
    total += valor //(total = total + valor) o valor de total é igual ao valor atual dele mais a soma de um valor do array, ou seja ele faz a soma armazena o valor somado e faz o loop pegando o proximo valor para somar novamente.
    /*
      #Receitas                    #Despesas
        total = 0 + 3000            total = 0 + 2500   
        total = 3000 + 2500         total = 2500 + 980
        total = 5500 + 1580         total = 3.480 + 799
        total = 7080 + 700          total = 4279 + 1700
        total = 7780                total = 5979
    */
  }

  return total
}

function saldoAtual() {
  const totalReceita = somar(saldoFamilia.receitas) // totalReceita recebe a execução da função somar com "saldoFamilia.receita" como Argumento
  const totalDespesa = somar(saldoFamilia.despesas) // totalDespesa recebe a execução da função somar com "saldoFamilia.despesas" como Argumento
  const totalUnificado = totalReceita - totalDespesa // totalUnificado recebe a subitração de totalReceita menos totalDespesa 7780 - 5979

  const saldoPositivo = totalUnificado >= 1 // saldoPositivo recebe o totalUnificado maior ou igual a 1

  let saldoAtual = 'Negativo' // saldo atual foi feito pra receber a string "Negativo"

  if (saldoPositivo) {
    saldoAtual = 'Positivo' // SE saldoAtual for true ou seja for maior ou igual a 1 a variavel saldoAtual vai ser alterada para a string "Positivo"
  }

  console.log(`Seu saldo é ${saldoAtual} em: R$${totalUnificado.toFixed(2)}`) //o toFixed fixa o valor numero em ate duas casas apos o ponto nesta situação
}

saldoAtual()
