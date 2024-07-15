import { useState, useEffect } from 'react';
import Country from '../country/country';
import'./countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedcountries, setVisitedcountries] = useState([]);

  const [visitedFlags , setVisitedflags] = useState([]);

  const handelvisitedcountries = country =>{
 console.log('add this to your visited country')

    // console.log(country);
   // console.log(country);
const newvisitedCountries = [...visitedcountries, country];
setVisitedcountries(newvisitedCountries);


}
const handelvisitedflags = flags =>{


  console.log('add this flag to your visited country')
  const newvisitedFlags = [...visitedFlags , flags]
  setVisitedflags(newvisitedFlags);


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

      <h3>Visited countries :  {visitedcountries.length}</h3><ul>

      {

            visitedcountries.map(country =><li key={country.cca3}>{country.name.common} </li>

            )

      }

      </ul>



      <div className = "flags-container">
        {

           visitedFlags.map(flag => <img src= {flag}></img>)
        }




      </div>
      <div className="country-container"  >
        {

            countries.map(country => <Country key={country.cca3} country={country} handelvisitedcountries={handelvisitedcountries}  handelvisitedflags={handelvisitedflags} > </Country>)

      }
      </div>
    </div>
  );
};

export default Countries;