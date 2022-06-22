import React, { useState, useEffect } from "react";
import allCountries from "./allCountries";
import Countries from "./components/Countries";
import DetailedCountry from "./components/DetailedCountry";
import Header from "./components/Header";
import { FaSearch } from "react-icons/fa";
export default function App() {
  const url = "https://restcountries.com/v3.1/all";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [showCountry, setShowCountry] = useState(""); //default state {null}
  const [darkMode, setDarkMode] = useState(false); //Zapisać ostatni stan w localStorage

  const filtredCountries = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(query.toLowerCase()) ||
      country.region.toLowerCase().includes(query.toLowerCase()) ||
      (country.subregion &&
        country.subregion.toLowerCase().includes(query.toLowerCase()))
    );
  });
  // const fetchCountries = ()=>{
  //   setLoading(true)
  //   fetch(url)
  //   .then(res=>res.json())
  //   .then(data=>useState(data))
  //   .catch(error=>console.log(error))
  //   .finally(()=>{
  //      setLoading(false)
  //
  //    })
  // }

  useEffect(() => {
    // fetchCountries()
    setCountries(allCountries);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  useEffect(() => {}, [darkMode]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const detailedCountryElement = countries.filter((country) => {
    return country.cca3 === showCountry;
  })[0];
  const searchIcon = <FaSearch />;
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        {showCountry ? (
          <DetailedCountry
            country={detailedCountryElement}
            setShowCountry={setShowCountry}
          />
        ) : (
          <>
            <div className="searchbar m-bottom-50">
              <form
                className=" container "
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  className="search"
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                  }}
                />
              </form>
            </div>
            <Countries
              countries={filtredCountries}
              setShowCountry={setShowCountry}
            />
          </>
        )}
      </main>
    </>
  );
}
