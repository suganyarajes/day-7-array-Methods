// Fetching data from the provided API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // 1. Get all the countries from Asia continent/region using Filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Countries from Asia:', asiaCountries);

    // 2. Get all the countries with a population of less than 2 lakhs using Filter function
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', countriesWithLowPopulation);

    // 3. Print the following details name, capital, flag, using forEach function
    console.log('Details (name, capital, flag) for each country:');
    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags[0]}`);
    });

    // 4. Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + (country.population || 0), 0);
    console.log('Total population of countries:', totalPopulation);

    // 5. Print the country that uses US dollars as currency
    const usDollarCountries = data.filter(country => country.currencies && country.currencies.USD);
    console.log('Countries using US dollars as currency:', usDollarCountries);
  })
  .catch(error => console.error('Error fetching data:', error));
