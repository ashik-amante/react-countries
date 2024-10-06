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

    const handleVisitedCountry = country => {
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry)
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <div>
                <h5>Visited Countries list :{visitedCountry.length} </h5>
                <ul>
                    {
                       visitedCountry.map(ghuradesh => <p key={ghuradesh.cca3} >{ghuradesh.name.common} </p> )
                    }
                </ul>
            </div>


            <div className="countries">
                {
                    countries.map(desh => <Country
                        key={desh.cca3}
                        country={desh}
                        handleVisitedCountry={handleVisitedCountry} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;