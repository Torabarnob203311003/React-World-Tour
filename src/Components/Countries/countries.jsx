import { useState, useEffect } from 'react';
import Country from '../country/country';
import'./countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json()) // Call the json() method correctly
      .then(data => {
        setCountries(data); // Update the countries state
        // console.log(data); // Log the data to the console
      });
  }, []);

  return (
    <div >
      <h3>Countries : {countries.length}</h3>
      <div className='country-container'  >
        {

            countries.map(country => <Country key={country.cca3} country={country}> </Country>)

      }
      </div>
    </div>
  );
};

export default Countries;