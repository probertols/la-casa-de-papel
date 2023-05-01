const searchButton = document.querySelector('.search-btn');
const coinInput = document.querySelector('#coin-input');

const handleSearch = () => {
  const coin = coinInput.value.toUpperCase(); 
  const url = `https://api.exchangerate.host/latest?base=${coin}`
 
  fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
   
};

searchButton.addEventListener('click', handleSearch);