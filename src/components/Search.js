import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiUrl, geoApi } from "../Api";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (input) => {
    return fetch(
      `${geoApiUrl}/cities?minpopulation=1000000&namePrefix=${input}`,
      geoApi
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (search) => {
    setSearch(search);
    onSearchChange(search);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "3px",
      border: "2px solid #101113",
      boxShadow: state.isFocused ? "0 0 0 2px #101113" : null,
      backgroundColor: "#c7c8ca",
    }),
    // label: (provided, state) => ({
    //   ...provided,
    //   color: "white",
    // }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#9B9B9B" : "#c7c8ca",
      color: "black",
    }),
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={customStyles}
    />
  );
};
export default Search;
