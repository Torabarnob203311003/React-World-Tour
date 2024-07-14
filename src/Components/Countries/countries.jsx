import { useState, useEffect } from 'react';
import Country from '../country/country';
import'./countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedcountries, setVisitedcountries] = useState([]);

  const handelvisitedcountries = country =>{
 console.log('add this to your visited country')

    console.log(country);
  }

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

      <h3>Visited countries :</h3>
      <div className="country-container"  >
        {

            countries.map(country => <Country key={country.cca3} country={country} handelvisitedcountries={handelvisitedcountries}> </Country>)

      }
      </div>
    </div>
  );
};

export default Countries;