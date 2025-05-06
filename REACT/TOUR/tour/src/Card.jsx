import { useState } from "react";


function card(image, id, name, country, populationData, fact){

    const [readMore, setReadMore] = useState(false);

    const population = populationData.substring(0,200);

    return(
        <div className="card"> 
            <img src={image} className="image" />
            <div>
                <h4 className="city-name">{name}</h4>
                <h4 className="country-name">{country}</h4>
            </div>
            <div className="population">
                {population}
            </div>
        </div>
    );
}

export default card;