import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([])

    const [visitedCountry, setVisitedCountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisited = country => {
        console.log(country);
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <div className="countries">
                {
                    countries.map(desh => <Country key={desh.cca3} country={desh} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;