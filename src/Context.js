import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false); //Zapisać ostatni stan w localStorage
  const url = "https://restcountries.com/v3.1/all";
  function filterCountries() {
    return allCountries.filter((country) => {
      return (
        country.name.common.toLowerCase().includes(query.toLowerCase()) ||
        country.region.toLowerCase().includes(query.toLowerCase()) ||
        (country.subregion &&
          country.subregion.toLowerCase().includes(query.toLowerCase()))
      );
    });
  }
  function changeMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  function searchCountry(event) {
    setQuery(event.target.value);
  }
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllCountries(data))
      .finally(() => setIsLoading(false));
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Context.Provider
      value={{
        allCountries,
        query,
        searchCountry,
        filterCountries,
        darkMode,
        changeMode,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
