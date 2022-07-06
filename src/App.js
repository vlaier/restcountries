import React from "react";

import Countries from "./components/Countries";
import DetailedCountry from "./components/DetailedCountry";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Countries />}></Route>
          <Route path="/:countryName" element={<DetailedCountry />}></Route>
        </Routes>
      </main>
    </>
  );
}
