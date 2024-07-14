 import './country.css'
 import { useState } from 'react';

 const Country =( {country}  ) =>{
    console.log(country)

   const {name,flags,population,area,maps,cca3}= country;
   const [visited , setVisited] = useState(false);

   const handelVisited =()=>{


//  setVisited(true);
 setVisited(!visited);

   }

 return (
            <div className='country'>

            <h3>Name : {name?.common}</h3>
             <img src={flags.png} alt="" />
             <p>Population : {population}</p>
             <p>Area : {area} </p>
             <p>Maps : {maps.googleMaps} </p>
             <p> <small>code:{cca3}</small> </p>
             <button onClick={handelVisited}>{ visited ? "visited" : " Going"}</button>

             <br />{

                visited ? 'i have visited this country' : 'i have not visited this country'
             }
            </div>


 )


 } 

 export default Country;