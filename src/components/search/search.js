import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { API_KEY, API_URL, geoApiOptions } from "../search/api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    // To stop API calls already being made when 
    if (!inputValue) {
      return Promise.resolve({ options: [] }); // Return an empty array of options when inputValue is empty
    }
    
    return fetch(`${API_URL}weather?q=${inputValue}&appid=${API_KEY}&units=metric`, geoApiOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Convert the response to a data object
      })
      .then((response) => {
        return {
          options: [
            {
              value: `${response.coord.lon}, ${response.coord.lat}`,
              label: `${response.name}, ${response.sys.country}`,
            },
          ],
        };
      }) || []
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search"
      debounceTimeout={3000}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
