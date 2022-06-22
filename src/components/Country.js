import React from "react";

function Country({ country, setShowCountry }) {
  const { name, population, region, capital, flags, cca3 } = country;
  return (
    <article
      className="country-card"
      onClick={() => {
        setShowCountry(cca3);
      }}
    >
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
    </article>
  );
}

export default Country;
