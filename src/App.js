import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current_weather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      {/* Title */}
      <h1 className="title">Weather App</h1>

      <Search onSearchChange={handleOnSearchChange} />
      < CurrentWeather />

    </div>
  );
}

export default App;
