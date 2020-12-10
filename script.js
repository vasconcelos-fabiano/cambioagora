// Essa parte vai buscar as informações da API
async function fetchCurrency(currency) {
  const response = await fetch(`https://economia.awesomeapi.com.br/json/${currency}-BRL`);
  const data = await response.json();

  if (currency === 'USD'){
      let currentUSD = data[0].bid;
      currentUSD = parseFloat(currentUSD).toFixed(3).replace(".", ",");
      usd = data[0].bid;
      document.querySelector('#usd').insertAdjacentHTML('beforeend', currentUSD);
  } else if (currency === 'EUR'){
      let currentEUR = data[0].bid;
      currentEUR = parseFloat(currentEUR).toFixed(3).replace(".", ",");
      eur = data[0].bid;
      document.querySelector('#eur').insertAdjacentHTML('beforeend', currentEUR);
  } else if (currency === 'CAD'){
      let currentCAD = data[0].bid;
      currentCAD = parseFloat(currentCAD).toFixed(3).replace(".", ",");
      cad = data[0].bid;
      document.querySelector('#cad').insertAdjacentHTML('beforeend', currentCAD);
  }
}

const product = function multiplyCurrency(initialvalue, currency) {
  return initialvalue * currency;
}

function convertRealto(){
  var realValue = document.querySelector("#brl").value;
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

var e = document.getElementById('Value');
function handleAmount(e) {
  if (e.type === 'keypress' || e.type === 'blur') {
    if (e.which == 13 || e.keyCode == 13) {
     realValue = e.target.value;
     console.log(realValue);
    }
  } 
}

currentUSD = fetchCurrency('USD');
currentEUR = fetchCurrency('EUR');
currentCAD = fetchCurrency('CAD');

teste = 78.86663258454;
teste = parseFloat(teste).toFixed(2);
document.querySelector('#teste').insertAdjacentHTML('beforeend', teste);
