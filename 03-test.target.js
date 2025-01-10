// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const faturamento = [
    { dia: 1, valor: 200 },
    { dia: 2, valor: 100 }, 
    { dia: 3, valor: 120 },
    { dia: 4, valor: 250 },
    { dia: 5, valor: 100 },
    { dia: 6, valor: 400 },
    { dia: 7, valor: 0 }, // final de semana
    { dia: 8, valor: 0 }, // final de semana
    { dia: 9, valor: 150 },
    { dia: 10, valor: 200 },
  ];
  
  function calcularFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);
  
    let menorFaturamento = diasComFaturamento[0].valor;
    let maiorFaturamento = diasComFaturamento[0].valor;
  
    // calcula menor e maior faturamento
    for (let i = 1; i < diasComFaturamento.length; i++) {
      if (diasComFaturamento[i].valor < menorFaturamento) {
          menorFaturamento = diasComFaturamento[i].valor;
      }
      if (diasComFaturamento[i].valor > maiorFaturamento) {
          maiorFaturamento = diasComFaturamento[i].valor;
      }
    }
  
    // calcula media mensal
    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
  
    // calcula faturament acima da media
    const diasAcimaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;
  
    return {
      menorFaturamento,
      maiorFaturamento,
      diasAcimaMedia
    };
  }
  
  const resultado = calcularFaturamento(faturamento); 
  console.log(`Menor valor de faturamento: ${resultado.menorFaturamento}`); 
  console.log(`Maior valor de faturamento: ${resultado.maiorFaturamento}`); 
  console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaMedia}`);