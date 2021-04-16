import React, { useState, useEffect, useContext } from "react";
import api from "./utils/api";
import { CountriesContext } from "./context/CountriesContext";
import Summary from "./components/Summary/Summary";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import Chart from "./components/Chart/Chart";
import { AppContainer } from "./App.style";

const App = () => {
  const [summary, setSummData] = useState({});
  const [countries, setCountries] = useContext(CountriesContext);

  useEffect(() => {
    (async () => {
      const res = await api.getSummary();
      setSummData({
        confirmed: res.data.Global.TotalConfirmed,
        deaths: res.data.Global.TotalDeaths,
        recovered: res.data.Global.TotalRecovered,
      });
      setCountries(res.data.Countries);
    })();
  }, []);
  return (
    <AppContainer>
      <Summary summary={summary} />
      <div className='desktop'>
        <List />
        <Map />
      </div>
      <Chart />
    </AppContainer>
  );
};

export default App;
