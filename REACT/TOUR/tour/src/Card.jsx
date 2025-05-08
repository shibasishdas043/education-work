import { useState } from "react";
import Cities from "./Cities";

function Card(image, id, name, country, populationData, fact, removeTour) {
  const [readMore, setReadMore] = useState(false);

  const population = readMore ? fact : `${fact.substring(0,200)}.....`;

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="card">
      <img src={image} className="image" />
      <div className="tour-info">
        <div>
          <h4 className="city-name">{name}</h4>
          <h4 className="country-name">{country}</h4>
        </div>
        <div className="population">
          {population}
          <span className="read-more" onClick={readMoreHandler}>
            {readMore ? `show less` : `read more`}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  );
}

export default Card;
