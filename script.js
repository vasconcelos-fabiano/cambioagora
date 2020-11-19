async function fetchCurrency(currency) {
  const response = await fetch(`https://economia.awesomeapi.com.br/json/${currency}-BRL`);
  const data = await response.json();

  if (currency === 'USD'){
      const currentUSD = data[0].bid.replace(".", ",");
      document.querySelector('#usd').insertAdjacentHTML('beforeend', currentUSD);
  } else if (currency === 'EUR'){
      const currentEUR = data[0].bid.replace(".", ",");
      document.querySelector('#eur').insertAdjacentHTML('beforeend', currentEUR);
  } else if (currency === 'CAD'){
      const currentCAD = data[0].bid.replace(".", ",");
      document.querySelector('#cad').insertAdjacentHTML('beforeend', currentCAD);
  }
}

const product = function multiplyCurrency(brl, currency) {
  return this.brl * this.currency;
}

currentUSD = fetchCurrency('USD');
currentEUR = fetchCurrency('EUR');
currentCAD = fetchCurrency('CAD');

multiplyCurrency(4, 7);
console.log(product);