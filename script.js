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

const product = function multiplyCurrency(initialvalue, currency) {
  return initialvalue * currency;
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
    }

var initialvalue = document.getElementById('Value');
initialvalue.onkeydown = function(e) {
  if(!((e.keyCode > 95 && e.keyCode < 106)
    || (e.keyCode > 47 && e.keyCode < 58) 
    || e.keyCode == 8)) {
      return false;
    }
  }

currentUSD = fetchCurrency('USD');
currentEUR = fetchCurrency('EUR');
currentCAD = fetchCurrency('CAD');