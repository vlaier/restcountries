import React, { useContext } from "react";
import { Context } from "../Context";
import Country from "./Country";
import SearchBar from "./SearchBar";
export default function Countries() {
  const { filterCountries } = useContext(Context);
  const countries = filterCountries();
  const countryElements = countries.map((country) => {
    return <Country key={country.name.common} country={country} />;
  });
  return (
    <>
      <SearchBar />
      <div className="countries container">{countryElements}</div>
    </>
  );
}
