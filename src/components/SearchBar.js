import React, { useContext } from "react";
import { Context } from "../Context";
export default function SearchBar() {
  const { query, searchCountry } = useContext(Context);
  return (
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
          onChange={searchCountry}
        />
      </form>
    </div>
  );
}
