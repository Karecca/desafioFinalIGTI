function formatNumber(numberToBeFormatted) {
  return numberToBeFormatted.toLocaleString('pt-BR', {
    // Ajustando casas decimais
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatPercentage(numberToBeFormatted) {
  if (numberToBeFormatted) {
    return numberToBeFormatted.toFixed(2).replace('.', ',') + '%';
  }
}

function formatMoney(numberToBeFormatted) {
  return (
    'R$ ' +
    numberToBeFormatted.toLocaleString('pt-BR', {
      // Ajustando casas decimais
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

function formatDay(numberToBeFormatted) {
  let n = numberToBeFormatted + '';
  return n.length >= 2 ? n : new Array(2 - n.length + 1).join(0) + n;
}

export { formatNumber, formatPercentage, formatMoney, formatDay };
