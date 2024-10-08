import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountry}) => {
    const {name, flags,population,area} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }
    // console.log(country);
    return (
        <div className={`box ${visited && 'visited'} `}>
            <h3 >Country : {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population : {population} </p>
            <p>Area : {area} </p>
            <button onClick={() => handleVisitedCountry(country)}> Mark visited</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
            {/* {visited && 'I have visited'} */}
            {visited ? ' i have visited' : ' I want to visit'}
        </div>
    );
};

export default Country;