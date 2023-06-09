import Swal from 'sweetalert2';
const searchButton = document.querySelector('.search-btn');
const coinInput = document.querySelector('#coin-input');
const coinTitle = document.querySelector('.coin-title');
const coinList = document.querySelector('.coin-list');

const renderCoins = (coins) => {
    coinList.innerHTML = '';
    const coinArray = Object.entries(coins);
    coinArray.map((coin) => {
        const [coinName, value] = coin
        const li = document.createElement('li');
        li.innerHTML = `${coinName} - ${value.toFixed(2)}`;
        coinList.append(li);

    })
}

const handleSearch = () => {
  const coin = coinInput.value.toUpperCase(); 
  if(!coin){
    Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Você precisa passar uma moeda!',
    })
    return;
 }

  const url = `https://api.exchangerate.host/latest?base=${coin}`
  let rates;

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    if(data.base !== coin){
        throw new Error("Moeda não existente!")
    }
    rates = data.rates;
    renderCoins(data.rates);
  }).catch((err) => {
    Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Moeda não existente',
    });
    coinTitle.innerHTML = '';
  });

  coinTitle.innerHTML = `Valores referentes a 1 ${coin}`
   

};

searchButton.addEventListener('click', handleSearch);