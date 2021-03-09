import React, {useState, useEffect} from 'react'
import api from "./utils/api"
import Summary from "./components/Summary/Summary"
import List from "./components/List/List"

const App = () => {
  const [summary, setSummData] = useState({});
  // const [countries, setCountries] = useContext(CountriesContext);
  
  useEffect(() => {
    (async () => {
      const res = await api.getSummary();
      setSummData({
        confirmed: res.data.Global.TotalConfirmed,
        deaths: res.data.Global.TotalDeaths,
        recovered: res.data.Global.TotalRecovered,
      });
      // setCountries(res.data.Countries);
    })();
  }, []);
  return (
    <div>
      <Summary summary={summary}/>
      <List/>
    </div>
  )
}

export default App

