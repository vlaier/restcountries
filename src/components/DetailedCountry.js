import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
function DetailedCountry({ country, setShowCountry }) {
  const { name, population, region, subregion, capital, flags, borders, tld } =
    country;

  return (
    <>
      <article className="container">
        <button
          class="btn btn-back m-bottom-50"
          onClick={() => setShowCountry(null)}
        >
          <FaLongArrowAltLeft /> Back
        </button>
        <div className="detailed-country">
          <div className="detailed-country--img">
            <img src={flags.svg} alt={name.common} />
          </div>
          <div className="detailed-country--info">
            <h3 className="detailed-country--name">{name.common}</h3>
            <div className="detailed-country-text">
              <div className="column">
                <p className="detailed-country--native-name">
                  <b>Native Name:</b>{" "}
                  {Object.values(name.nativeName)[0].official}
                </p>
                <p className="detailed-country--population">
                  <b>Population:</b>{" "}
                  {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <p className="detailed-country--region">Region: {region}</p>

                <p className="detailed-country--subregion">
                  <b>Sub Region: </b>
                  {subregion}
                </p>
                {capital && (
                  <p className="detailed-country--region">
                    <b>Capital:</b> {capital[0]}
                  </p>
                )}
              </div>
              <div className="column">
                <p>Top Level Domain: {tld}</p>
              </div>
            </div>

            <div className="borders">
              {borders && (
                <div className="border">
                  <strong>Border Countries: </strong>
                  {borders.map((borderCountry) => (
                    <button onClick={() => setShowCountry(borderCountry)}>
                      {borderCountry}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default DetailedCountry;
