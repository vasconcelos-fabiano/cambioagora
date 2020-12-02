async function fetchCurrency(currency) {
  const response = await fetch(`https://economia.awesomeapi.com.br/json/${currency}-BRL`);
  const data = await response.json();

  if (currency === 'USD'){
      const currentUSD = data[0].bid.replace(".", ",");
      usd = data[0].bid;
      document.querySelector('#usd').insertAdjacentHTML('beforeend', currentUSD);
  } else if (currency === 'EUR'){
      const currentEUR = data[0].bid.replace(".", ",");
      eur = data[0].bid;
      document.querySelector('#eur').insertAdjacentHTML('beforeend', currentEUR);
  } else if (currency === 'CAD'){
      const currentCAD = data[0].bid.replace(".", ",");
      cad = data[0].bid;
      document.querySelector('#cad').insertAdjacentHTML('beforeend', currentCAD);
  }
}

const product = function multiplyCurrency(brl, currency) {
  return brl * currency;
}

function convertRealto(){
  var realValue = document.querySelector("#blr").value;
  var Currency = document.querySelector("#moedas").value;

  let result = 0;

  switch (Currency) {
    case 'usd':
      result = realValue / usd;
      break;
    case 'eur':
      result = realValue / eur;
      break;
    case 'cad':
      result = realValue / cad;
      break;
  }

  console.log(result);
}

currentUSD = fetchCurrency('USD');
currentEUR = fetchCurrency('EUR');
currentCAD = fetchCurrency('CAD');