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
        li.innerHTML = `${coinName} - ${value}`;
        coinList.append(li);

    })
}

const handleSearch = () => {
  const coin = coinInput.value.toUpperCase(); 
  const url = `https://api.exchangerate.host/latest?base=${coin}`
  let rates;

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    rates = data.rates;
    renderCoins(data.rates);
  });

  coinTitle.innerHTML = `Valores referentes a 1 ${coin}`
   

};

searchButton.addEventListener('click', handleSearch);