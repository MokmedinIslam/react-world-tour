import { useEffect } from "react";
import { useState } from "react";
import Desh from "../country-c/Desh";
// import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = (country) => {
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            } */}
            <div className="countries-container">
                {
                    countries.map(country => <Desh 
                        key={country.cca3}
                        handleVisitedCountries = {handleVisitedCountries}
                        country={country}></Desh>)
                }
            </div>
        </div>
    );
};

export default Countries;