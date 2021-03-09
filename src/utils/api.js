import axios from "axios";

export default {
  getSummary: () => {
    return axios.get("https://api.covid19api.com/summary");
  },
  getChartData: (CountryAbbrev) => {
    const todayString = new Date().toISOString().split("T")[0];

    return axios.get(
      `https://api.covid19api.com/country/${CountryAbbrev}?to=${todayString}T00:00:00Z`
    );
  },
};
