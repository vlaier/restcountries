import React from "react";
import { Link } from "react-router-dom";
function Country({ country }) {
  const { name, population, region, capital, flags, cca3 } = country;

  return (
    <Link to={`/${cca3}`} className="country-card">
      <div className="country-card--img">
        <img src={flags.png} alt={name.common} />
      </div>

      <div className="country-card--info">
        <h3 className="country-card--name">{name.common}</h3>
        <p className="country-card--population">
          <strong>Population:</strong>{" "}
          {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p className="country-card--region">
          <strong>Region:</strong> {region}
        </p>
        {capital && (
          <p className="country-card--region">
            <strong>Capital:</strong> {capital[0]}
          </p>
        )}
      </div>
    </Link>
  );
}

export default Country;
