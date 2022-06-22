import React from "react";
import Country from "./Country";
export default function Countries({ countries, setShowCountry }) {
  const countryElements = countries.map((country) => {
    return (
      <Country
        key={country.name.common}
        country={country}
        setShowCountry={setShowCountry}
      />
    );
  });
  return <div className="countries container">{countryElements}</div>;
}
