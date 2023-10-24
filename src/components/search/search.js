import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { API_KEY, API_URL} from '../search/api'

const Search = ({onSearchChange}) => {
  
  const[search, setSearch] = useState(null);
  
  const loadOptions = (inputValue) => {
    return fetch(`${API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`, {
      "method": "GET",
      "headers": {
      }
      })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  return (
    <AsyncPaginate
      placeholder="Search"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search